import { Box, CircleCheck, Clock, Motorbike } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"

type Props = {}

export default function Delivery(props: Props) {

  return (
    <div className="flex hover:bg-[#292929] bg-[#252525] cursor-pointer flex-col w-full shrink-0 h-40 p-4 justify-between rounded-xl border border-white/10">
        <div className="flex w-full h-fit justify-between">
            <div className="flex items-center gap-1 ">
                <BoxIcon />
                <p className="text-sm text-[#737982] font-semibold">#DEL001</p>
            </div>
            <DeliveryStatus status='delivered'/>
        </div>
        <div>
            <h2 className="text-lg font-semibold">Centro, São Paulo</h2>
            <p className="text-sm text-[#737982] font-medium">Carlos Silva</p>
        </div>
        <ProgressBar value={33}/>
    </div>
  ) 
}

function BoxIcon() {
    return <Box size={16} className="text-[#737982]"/>
}

type Status = {
     status: 'delivered' | 'in transit' | 'pending' }

function DeliveryStatus({ status }: Status ) {
  
    switch (status) {
    case 'delivered':
        return <div className="flex rounded-4xl gap-2 px-1.5  bg-green-200/20 items-center">
                 <CircleCheck size={10} strokeWidth={3} className="text-green-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-green-500 ">{status}</p>
               </div>
        case 'in transit':
        return <div className="flex rounded-4xl gap-2 px-1.5   bg-blue-200/20 items-center">
                 <Motorbike size={10} strokeWidth={3} className="text-blue-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-blue-500 ">{status}</p>
               </div>
        case 'pending':
        return <div className="flex rounded-4xl gap-2 px-1.5   bg-yellow-200/20 items-center">
                 <Clock size={10} strokeWidth={3} className="text-yellow-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-yellow-500 ">{status}</p>
               </div>
  }
};