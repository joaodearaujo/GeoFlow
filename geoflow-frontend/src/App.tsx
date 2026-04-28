import Deliveries from "./components/Deliveries"
import SearchField from "./components/Search"
// import Map from "./components/Map"
import Details from "./components/Details"

function App() {

  return (
    <div className="grid grid-cols-12 w-full min-h-0 h-screen overflow-hidden bg-card">
      <div className="col-span-2 flex min-h-0 h-full flex-col border-b border border-white/10">
          <div className="flex flex-col gap-1 w-full p-4 ">
            <h1 className="text-2xl font-bold">GeoFlow</h1>
            <p className="text-sm font-semibold text-[#737982] ">Logística em tempo real</p>
          </div>
          <div className="flex w-full h-auto p-4 border-b border-t border-white/10">
            <SearchField />
          </div>
          <Deliveries />
      </div>
                  
      <div className="col-span-7 flex h-full items-center justify-center">
        {/* <Map /> */}
      </div>

      <div className="col-span-3 flex flex-col h-full border-b border border-white/10">
          <Details />s
      </div>
    </div>
  )
}

export default App
