import { useDeliveries } from '@/hooks/useDeliveries';
import React from 'react'

export default function DetailsHeader() {

      const { data: deliveries, isLoading, isError } = useDeliveries();
    
      if (isLoading) return <div className="animate-pulse bg-[#252525] h-24 rounded-xl" />;
      if (isError || !deliveries || deliveries.length === 0) return null;
    
      const firstDelivery = deliveries[0];
      const { route } = firstDelivery;

  return (
    <div className="flex gap-1 w-full p-4 border-b border-white/10">
        <div className='flex w-full flex-col'>
          <div className="flex justify-between ">
              <p className="text-sm font-semibold text-[#737982] ">Detalhes da entrega</p>
              <p className="text-sm text-[#737982] font-semibold">#DEL{firstDelivery.id}</p>
          </div>
          <h2 className="text-xl font-semibold">{route.origin.street}, {route.origin.number} - {route.origin.neighborhood}</h2>
          <p className="text-sm text-blue-500 font-medium">{firstDelivery.status.replace('_', ' ').toUpperCase()}</p>
        </div>
    </div>
  )
}

