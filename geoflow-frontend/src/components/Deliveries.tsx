import Delivery from "./cards/Delivery"

type Props = {
}

export default function Deliveries({}: Props) {
  return (
    <div className="flex flex-col shrink-0 min-h-0 h-full p-2 gap-2 overflow-y-auto gap-1 w-full p-2 border-b border border-black/10">
        <div className="flex w-full items-center justify-between">
            <p className="text-sm font-semibold">Entregas Ativas</p>
            <p className="text-xs font-thin">8 total</p>
        </div>

        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
    </div>
  )
} 