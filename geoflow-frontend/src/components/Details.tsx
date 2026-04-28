import Driver from './cards/Driver'
import Location from './cards/Location'
import Info from './cards/Info'
import DetailsHeader from './DetailsHeader'

export default function Details() {
  return (
    <div className='flex flex-col items-center jusitfy-start w-full h-full gap-4 p-4'>
        <DetailsHeader />
        <Driver />
        <div className='flex flex-col w-full gap-2'>
          <p className="text-sm text-[#737982] font-semibold">Localização</p>
          <Location />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <p className="text-sm text-[#737982] font-semibold">Informações da Entrega</p>
          <Info />
        </div>
    </div>
  )
}