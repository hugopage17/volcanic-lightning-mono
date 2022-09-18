import { GraphQLClient, gql } from 'graphql-request';
import lightningPoller from "../api/lightning-poller";

const handler = async (): Promise<any> => {
    const endpoint = process.env.GRAPHQL_ENDPOINT as string;
    const apiKey = process.env.API_KEY as string
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          'x-api-key': apiKey,
        },
    });

    const geoJson = await lightningPoller();

    const mutation = gql`
    mutation MyMutation($input: CreateGeoJSONInput!) {
        createGeoJSON(input: $input) {
            id
            timestamp
            type
            updatedAt
            features {
                geometry {
                    coordinates
                    type
                }
                properties {
                    area
                    hundredKmStrikes
                    name
                    severity
                    twentyKmStrikes
                    volcanoType
                }
                type
            }
            createdAt  
        }
    }`
    const data = await graphQLClient.request(mutation, { input: geoJson })
    console.log(JSON.stringify(data, undefined, 2))
    return geoJson
};

export { handler };
 