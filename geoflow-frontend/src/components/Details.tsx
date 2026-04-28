import { useDeliveries } from "@/hooks/useDeliveries";
import Driver from "./cards/Driver";
import Location from "./cards/Location";
import Info from "./cards/Info";
import DetailsHeader from "./DetailsHeader";

export default function Details({ deliveryId }: { deliveryId: number | null }) {
  const { data: deliveries } = useDeliveries();
  
  const selectedDelivery = deliveries?.find(d => d.id === deliveryId);

  if (!deliveryId || !selectedDelivery) {
    return (
      <div className="flex items-center justify-center h-full text-[#737982]">
        Selecione uma entrega para ver os detalhes
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center jusitfy-start w-full h-full gap-4 p-4'>
        <DetailsHeader />
        <Driver delivery={selectedDelivery}/>
        <div className='flex flex-col w-full gap-2'>
          <p className="text-sm text-[#737982] font-semibold">Localização</p>
          <Location delivery={selectedDelivery}/>
        </div>
        <div className='flex flex-col w-full gap-2'>
          <p className="text-sm text-[#737982] font-semibold">Informações da Entrega</p>
          <Info delivery={selectedDelivery}/>
        </div>
    </div>
  )
}