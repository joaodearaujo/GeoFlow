import { useDeliveries } from "@/hooks/useDeliveries";
import { MapPin, MousePointer2 } from "lucide-react"

export default function Location() {

    const { data: deliveries, isLoading, isError } = useDeliveries();
    
      if (isLoading) return <div className="animate-pulse transition-all ease-in-out bg-[#252525] h-24 rounded-xl" />;
      if (isError || !deliveries || deliveries.length === 0) return null;
    
      const firstDelivery = deliveries[0];
      const { route } = firstDelivery;

  return (
    <div className="flex justify-center hover:bg-[#292929] bg-[#252525] cursor-pointer flex-col w-full shrink-0 h-fit p-4 rounded-xl border border-white/10">
        <div className="flex flex-col gap-2">
        
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 w-full h-fit">
                    <CoordsIcon />
                    <div className="flex justify-start h-10 flex-col gap-1">
                        <p className="text-xs text-[#737982] font-regular">Coordenadas</p>
                        <p className="text-md font-regular leading-none">{parseFloat(firstDelivery.currentLat.toFixed(3))}°, {parseFloat(firstDelivery.currentLon.toFixed(3))}°</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 w-full h-fit">
                    <DesitnyIcon />
                    <div className="flex justify-start h-10 flex-col gap-1">
                        <p className="text-xs text-[#737982] font-regular">Destino</p>
                        <p className="text-md font-regular leading-none">{route.destiny.street}, {route.destiny.number} - {route.destiny.neighborhood}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


function CoordsIcon() {
    return <MapPin size={24} className="text-blue-500"/>
}
function DesitnyIcon() {
    return <MousePointer2 size={24} className="text-blue-500 rotate-90"/>
}