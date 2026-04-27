import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCoords } from "@/api";

export function useDeliveries() {

  const query = useQuery({
    queryKey: ['Coords'],
    queryFn: () => getCoords()

  })  

  return query
}