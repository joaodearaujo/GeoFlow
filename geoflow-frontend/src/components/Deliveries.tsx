import Delivery from "./cards/Delivery"

type Props = {
}

export default function Deliveries({}: Props) {
  return (
    <div className="flex flex-col shrink-0 min-h-0 h-full max-h-182 p-2 gap-2 overflow-y-auto gap-1 w-full p-2 border-b border border-white/10">
        <div className="flesx bg-card flex w-full items-center justify-between">
            <p className="text-xs text-[#737982] font-semibold">Entregas Ativas</p>
            <p className="text-xs text-[#737982]  font-medium">8 total</p>
        </div>
        <Delivery />
    </div>
  )
} ''