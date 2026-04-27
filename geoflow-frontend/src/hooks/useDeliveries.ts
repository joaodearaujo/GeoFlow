import { useQuery } from "@tanstack/react-query";
import { getCoords } from "@/api";

export function useDeliveries() {
  return useQuery({
    queryKey: ['deliveries'],
    queryFn: () => getCoords(),
    },
}