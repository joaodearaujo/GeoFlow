import { useDeliveries } from "@/hooks/useDeliveries";
import Delivery from "./cards/Delivery"


export default function Deliveries() {

      const { data: deliveries, isLoading, isError } = useDeliveries();
    
      if (isLoading) return <div className="animate-pulse bg-[#252525] h-24 rounded-xl" />;
      if (isError || !deliveries || deliveries.length === 0) return null;
    
  return (
    <div className="flex flex-col shrink-0 min-h-0 h-full max-h-182 overflow-hidden  w-full">
        <div className="flesx bg-card flex w-full items-center justify-between p-2">
            <p className="text-xs text-[#737982] font-semibold">Entregas Ativas</p>
            <p className="text-xs text-[#737982]  font-medium">{deliveries.length} total</p>
        </div>
        <div className="flex flex-col shrink-0 min-h-0 h-full max-h-182 overflow-y-auto gap-4 w-full p-4">
          {deliveries?.map(delivery => (
            <Delivery
              key={delivery.id}
              delivery={delivery}
            />
            ))}
        </div>
    </div>
  )
} 