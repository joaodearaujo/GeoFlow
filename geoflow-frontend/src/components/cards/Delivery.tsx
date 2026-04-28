import { Box, CircleCheck, Clock, Truck } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"
import type { Delivery } from "@/schemas/DeliverySchema"


export default function Delivery({delivery}: { delivery: Delivery}) {

  return (
    <div  className="flex hover:bg-[#292929] bg-[#252525] cursor-pointer flex-col w-full shrink-0 min-h-40 h-fit p-4 justify-between rounded-xl border border-white/10">
        <div className="flex w-full h-fit justify-between">
            <div className="flex items-center gap-1 ">
                <BoxIcon />
                <p className="text-sm text-[#737982] font-semibold">#DEL{delivery.id}</p>
            </div>  
            <DeliveryStatus status={delivery.status}/>
        </div>
        <div>
            <h2 className="text-lg font-semibold">{delivery.route.origin.street}, {delivery.route.origin.city}</h2>
            <p className="text-sm text-[#737982] font-medium">{delivery.driver.name}</p>
        </div>
        <ProgressBar value={33}/>
    </div>
  ) 
}

function BoxIcon() {
    return <Box size={16} className="text-[#737982]"/>
}

type Status = {
     status: 'delivered' | 'in_transit' | 'pending' | 'canceled' }

function DeliveryStatus({ status }: Status ) {
  
    switch (status) {
    case 'delivered':
        return <div className="flex rounded-4xl gap-1 px-1.5  bg-green-200/20 items-center">
                 <CircleCheck size={12} strokeWidth={3} className="text-green-500" />
                 <p className="capitalize text-[12px] leading-none font-semibold text-green-500 ">{status}</p>
               </div>
        case 'in_transit':
        return <div className="flex rounded-4xl gap-1 px-1.5   bg-blue-200/20 items-center">
                 <Truck size={12} strokeWidth={3} className="text-blue-500" />
                 <p className="capitalize text-[12px] leading-none font-semibold text-blue-500 ">{status.replace('_', ' ')}</p>
               </div>
        case 'pending':
        return <div className="flex rounded-4xl gap-1 px-1.5   bg-yellow-200/20 items-center">
                 <Clock size={12} strokeWidth={3} className="text-yellow-500" />
                 <p className="capitalize text-[12px] leading-none font-semibold text-yellow-500 ">{status}</p>
               </div>
        case 'canceled':
        return <div className="flex rounded-4xl gap-1 px-1.5   bg-red-200/20 items-center">
                 <Clock size={10} strokeWidth={3} className="text-red-500" />
                 <p className="capitalize text-[12px] leading-none font-semibold text-red-500 ">{status}</p>
               </div>
  }
};