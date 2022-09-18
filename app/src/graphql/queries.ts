/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGeoJSON = /* GraphQL */ `
  query GetGeoJSON($id: ID!) {
    getGeoJSON(id: $id) {
      type
      features {
        type
        geometry {
          type
          coordinates
        }
        properties {
          name
          area
          twentyKmStrikes
          hundredKmStrikes
          volcanoType
          severity
        }
      }
      timestamp
      id
      createdAt
      updatedAt
    }
  }
`;
export const listGeoJSONS = /* GraphQL */ `
  query ListGeoJSONS(
    $filter: ModelGeoJSONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeoJSONS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        features {
          type
          geometry {
          coordinates
          type
        }
        properties {
          area
          hundredKmStrikes
          name
          twentyKmStrikes
          volcanoType
          severity
        }
        }
        timestamp
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
