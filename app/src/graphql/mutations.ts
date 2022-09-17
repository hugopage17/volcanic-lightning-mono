/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGeoJSON = /* GraphQL */ `
  mutation CreateGeoJSON(
    $input: CreateGeoJSONInput!
    $condition: ModelGeoJSONConditionInput
  ) {
    createGeoJSON(input: $input, condition: $condition) {
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
export const updateGeoJSON = /* GraphQL */ `
  mutation UpdateGeoJSON(
    $input: UpdateGeoJSONInput!
    $condition: ModelGeoJSONConditionInput
  ) {
    updateGeoJSON(input: $input, condition: $condition) {
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
export const deleteGeoJSON = /* GraphQL */ `
  mutation DeleteGeoJSON(
    $input: DeleteGeoJSONInput!
    $condition: ModelGeoJSONConditionInput
  ) {
    deleteGeoJSON(input: $input, condition: $condition) {
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
