import { useDeliveries } from "@/hooks/useDeliveries";
import DeliveryCard from "./cards/Delivery";

interface DeliveriesProps {
  onSelect: (id: number) => void;
  selectedId: number | null;
}

export default function Deliveries({ onSelect, selectedId }: DeliveriesProps) {
  const { data: deliveries, isLoading, isError } = useDeliveries();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 p-2 w-full">
        <p className="text-xs text-[#737982] font-semibold mb-2">Carregando entregas...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-red-500 text-sm">
        Erro ao conectar com o servidor de logística.
      </div>
    );
  }

  return (
    <div className="flex flex-col shrink-0 min-h-0 h-full p-2 gap-2 overflow-y-auto w-full border-r border-white/10">
        <div className="flex bg-transparent w-full items-center justify-between mb-2 px-1">
            <p className="text-xs text-[#737982] font-semibold">Entregas Ativas</p>
            <p className="text-xs text-[#737982] font-medium">{deliveries?.length || 0} total</p>
        </div>

        {deliveries?.map((delivery) => (
            <div 
              key={delivery.id} 
              onClick={() => onSelect(delivery.id)}
              className={`transition-all duration-200 rounded-xl ${
                selectedId === delivery.id 
                ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-[#121212]' 
                : 'hover:opacity-80'
              }`}
            >
                <DeliveryCard delivery={delivery} />
            </div>
        ))}
    </div>
  );
}