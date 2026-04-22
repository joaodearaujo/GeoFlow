import { Box, CircleCheck, Clock, Motorbike } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

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
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-xs text-[#737982] font-semibold">Progress</p>
                <p className="text-xs text-[#737982] font-semibold">33%</p>
            </div>
            <Progress value={33}/>
        </div>
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
        return <div className="flex rounded-4xl gap-2 px-1.5  bg-green-200/10 items-center">
                 <CircleCheck size={10} strokeWidth={3} className="text-green-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-green-500 ">{status}</p>
               </div>
        case 'in transit':
        return <div className="flex rounded-4xl gap-2 px-1.5   bg-blue-200/10 items-center">
                 <Motorbike size={10} strokeWidth={3} className="text-blue-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-blue-500 ">{status}</p>
               </div>
        case 'pending':
        return <div className="flex rounded-4xl gap-2 px-1.5   bg-yellow-200/10 items-center">
                 <Clock size={10} strokeWidth={3} className="text-yellow-500" />
                 <p className="capitalize text-[12px] leading-none font-regular text-yellow-500 ">{status}</p>
               </div>
  }
};