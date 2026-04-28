import { useQuery } from "@tanstack/react-query";
import { getDeliveries } from "@/api";

export function useDeliveries() {
  return useQuery({
    queryKey: ['deliveries'],
    queryFn: getDeliveries,
    refetchInterval: (query) => {

      const hasActiveDeliveries = query.state.data?.some(
        d => d.status === 'IN_TRANSIT' || d.status === 'PENDING'
      );
      return hasActiveDeliveries ? 2000 : false;
    },
  });
}