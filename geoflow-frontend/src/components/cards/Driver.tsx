import { useDeliveries } from "@/hooks/useDeliveries"
import { Phone, User } from "lucide-react"


export default function Driver() {
  const { data: deliveries, isLoading, isError } = useDeliveries();

  // 1. Handle Loading/Error States
  if (isLoading) return <div className="animate-pulse bg-[#252525] h-24 rounded-xl" />;
  if (isError || !deliveries || deliveries.length === 0) return null;

  // 2. Extract the first driver (Assuming the view is for the current active driver)
  const firstDelivery = deliveries[0];
  const { driver } = firstDelivery;

  return (
    <div className="flex justify-center hover:bg-[#292929] bg-[#252525] cursor-pointer flex-col w-full shrink-0 h-fit p-4 rounded-xl border border-white/10 transition-colors">
      <div className="flex flex-col gap-4">
        {/* Driver Info Section */}
        <div className="flex items-center gap-3 w-full h-fit">
          <DriverIcon />
          <div className="flex h-10 flex-col gap-1">
            <p className="text-xs text-[#737982] font-semibold uppercase tracking-wider">Driver</p>
            <p className="text-md font-semibold leading-none text-white">
              {driver.name}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-2 w-full h-fit">
          <PhoneIcon />
          <p className="text-sm text-[#FFFFFF] font-regular">
            {driver.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

function DriverIcon() {
    return <div className="rounded-full bg-blue-500/30 size-10 items-center justify-center flex"><User className="text-blue-400"/></div>
}

function PhoneIcon() {
    return <Phone size={20} className="text-[#737982]"/>
}