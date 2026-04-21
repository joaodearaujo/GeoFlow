import Deliveries from "./components/Deliveries"
import SearchField from "./components/Search"

function App() {

  return (
    <div className="grid grid-cols-12 w-full min-h-0 h-screen overflow-hidden">
      <div className="col-span-2 flex min-h-0 h-full flex-col">
          <div className="flex flex-col gap-1 w-full p-4 border-b border border-black/10">
            <h1 className="text-2xl font-semibold">GeoFlow</h1>
            <p>Logística em tempo real</p>
          </div>
          <div className="flex w-full h-auto p-4 border-b border border-black/10">
            <SearchField />
          </div>
          <Deliveries />
      </div>
      <div className="col-span-7 flex h-full items-center justify-center">Map</div>
      <div className="col-span-3 flex h-full items-center justify-center">Delivery Detail</div>
    </div>
  )
}

export default App
