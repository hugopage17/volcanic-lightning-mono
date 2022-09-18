/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGeoJSONInput = {
  type: string,
  features: Array< FeatureInput | null >,
  timestamp: string,
  id?: string | null,
};

export type FeatureInput = {
  type: string,
  geometry: GeometryInput,
  properties: PropertiesInput,
};

export type GeometryInput = {
  type: string,
  coordinates: Array< number | null >,
};

export type PropertiesInput = {
  name: string,
  area: string,
  twentyKmStrikes: number,
  hundredKmStrikes: number,
  volcanoType: string,
  severity: string,
};

export type ModelGeoJSONConditionInput = {
  type?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelGeoJSONConditionInput | null > | null,
  or?: Array< ModelGeoJSONConditionInput | null > | null,
  not?: ModelGeoJSONConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type GeoJSON = {
  __typename: "GeoJSON",
  type: string,
  features:  Array<Feature | null >,
  timestamp: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Feature = {
  __typename: "Feature",
  type: string,
  geometry: Geometry,
  properties: Properties,
};

export type Geometry = {
  __typename: "Geometry",
  type: string,
  coordinates: Array< number | null >,
};

export type Properties = {
  __typename: "Properties",
  name: string,
  area: string,
  twentyKmStrikes: number,
  hundredKmStrikes: number,
  volcanoType: string,
  severity: string,
};

export type UpdateGeoJSONInput = {
  type?: string | null,
  features?: Array< FeatureInput | null > | null,
  timestamp?: string | null,
  id: string,
};

export type DeleteGeoJSONInput = {
  id: string,
};

export type ModelGeoJSONFilterInput = {
  type?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelGeoJSONFilterInput | null > | null,
  or?: Array< ModelGeoJSONFilterInput | null > | null,
  not?: ModelGeoJSONFilterInput | null,
};

export type ModelGeoJSONConnection = {
  __typename: "ModelGeoJSONConnection",
  items:  Array<GeoJSON | null >,
  nextToken?: string | null,
};

export type CreateGeoJSONMutationVariables = {
  input: CreateGeoJSONInput,
  condition?: ModelGeoJSONConditionInput | null,
};

export type CreateGeoJSONMutation = {
  createGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGeoJSONMutationVariables = {
  input: UpdateGeoJSONInput,
  condition?: ModelGeoJSONConditionInput | null,
};

export type UpdateGeoJSONMutation = {
  updateGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGeoJSONMutationVariables = {
  input: DeleteGeoJSONInput,
  condition?: ModelGeoJSONConditionInput | null,
};

export type DeleteGeoJSONMutation = {
  deleteGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGeoJSONQueryVariables = {
  id: string,
};

export type GetGeoJSONQuery = {
  getGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGeoJSONSQueryVariables = {
  filter?: ModelGeoJSONFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGeoJSONSQuery = {
  listGeoJSONS?:  {
    __typename: "ModelGeoJSONConnection",
    items:  Array< {
      __typename: "GeoJSON",
      type: string,
      features:  Array< {
        __typename: "Feature",
        type: string,
      } | null >,
      timestamp: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGeoJSONSubscription = {
  onCreateGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGeoJSONSubscription = {
  onUpdateGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGeoJSONSubscription = {
  onDeleteGeoJSON?:  {
    __typename: "GeoJSON",
    type: string,
    features:  Array< {
      __typename: "Feature",
      type: string,
      geometry:  {
        __typename: "Geometry",
        type: string,
        coordinates: Array< number | null >,
      },
      properties:  {
        __typename: "Properties",
        name: string,
        area: string,
        twentyKmStrikes: number,
        hundredKmStrikes: number,
        volcanoType: string,
        severity: string,
      },
    } | null >,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
