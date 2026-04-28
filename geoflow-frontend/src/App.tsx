import { useState } from "react";
import Map from "./components/Map";
import Details from "./components/Details";
import Deliveries from "./components/Deliveries";
import SearchField from "./components/Search";

export default function App() {

  const [selectedDeliveryId, setSelectedDeliveryId] = useState<number | null>(null);

  return (
    <main className="flex h-screen w-full bg-[#121212] text-white">
      <aside className="w-80 border-r border-white/10 flex flex-col">
          <div className="flex flex-col gap-1 w-full p-4 ">
            <h1 className="text-2xl font-bold">GeoFlow</h1>
            <p className="text-sm font-semibold text-[#737982] ">Logística em tempo real</p>
          </div>
          <div className="flex w-full h-auto p-4 border-b border-t border-white/10">
            <SearchField />
          </div>
        <Deliveries 
          onSelect={setSelectedDeliveryId} 
          selectedId={selectedDeliveryId} 
        />
      </aside>

      <section className="flex-1 relative">
        <Map 
          onMarkerClick={setSelectedDeliveryId} 
          selectedId={selectedDeliveryId} 
        />
      </section>

      <aside className="w-96 border-l border-white/10">
        <Details deliveryId={selectedDeliveryId} />
      </aside>
    </main>
  );
}