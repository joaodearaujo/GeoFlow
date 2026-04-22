import React from 'react'

export default function DetailsHeader() {
  return (
    <div className="flex  gap-1 w-full p-4 border border-white/10">
        <div className='flex w-full flex-col'>
          <div className="flex justify-between ">
              <p className="text-sm font-semibold text-[#737982] ">Detalhes da entrega</p>
              <p className="text-sm text-[#737982] font-semibold">#DEL001</p>
          </div>
          <h2 className="text-xl font-semibold">Leme, Rio de Janeiro </h2>
          <p className="text-sm text-blue-500 font-medium">In transit</p>
        </div>
    </div>
  )
}

