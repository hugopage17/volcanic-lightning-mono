import { useEffect, useState } from "react";
import { GeoJSON } from "@global-volcanic-lightning/types";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateGeoJSON } from "../graphql/subscriptions";
import { listGeoJSONS } from "../graphql/queries";

const useLightning = () => {
  const [lightning, setLightning] = useState<GeoJSON | null>(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(false);

  const reload = () => isLoading(true);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateGeoJSON)) as any;
    subscription.subscribe({
      next: (data: any) => setLightning(data.value.data.onCreateGeoJSON),
    });
  }, []);

  useEffect(() => {
    if (loading) {
      const res = API.graphql(
        graphqlOperation(listGeoJSONS, { limit: 1 })
      ) as any;
      res
        .then((data: any) => {
          setLightning(data.data.listGeoJSONS.items[0]);
          isLoading(false);
        })
        .catch(() => {
          setError(true);
          isLoading(false);
        });
    }
  }, [loading]);

  return { lightning, loading, reload, error };
};

export default useLightning;
