import { Box, Clock } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"
import { useDeliveries } from "@/hooks/useDeliveries";


export default function Info() {

    const { data: deliveries, isLoading, isError } = useDeliveries();
    
      if (isLoading) return <div className="animate-pulse bg-[#252525] h-24 rounded-xl" />;
      if (isError || !deliveries || deliveries.length === 0) return null;
    
      const firstDelivery = deliveries[0];
      const { pack } = firstDelivery

  return (
        <div className="flex justify-center hover:bg-[#292929] bg-[#252525] cursor-pointer flex-col w-full shrink-0 h-fit p-4 rounded-xl border border-white/10">
            <div className="flex flex-col gap-2">
            
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 w-full h-fit">
                            <ClockIcon />
                            <p className="text-xs text-[#737982] font-semibold">Tempo de espera</p>
                        </div>
                        <p className="text-xs font-semibold text-nowrap">25 min</p>
                    </div>

                </div>  
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 w-full h-fit">
                            <BoxIcon />
                            <p className="text-xs text-[#737982] font-semibold">Peso</p>
                        </div>
                        <p className="text-xs font-semibold text-nowrap">{pack.weight} kg</p>
                    </div>
                </div>  

                <hr />

                <ProgressBar value={33}/>

            </div>
        </div>
  )
}

function ClockIcon() {
    return <Clock size={16} className="text-[#737982]"/>
}
function BoxIcon() {
    return <Box size={16} className="text-[#737982]"/>
}