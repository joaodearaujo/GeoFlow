import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useDeliveries } from '@/hooks/useDeliveries';

interface MapProps {
  onMarkerClick: (id: number) => void;
  selectedId: number | null;
}

export default function Map({ onMarkerClick, selectedId }: MapProps) {
  const { data: deliveries } = useDeliveries();

  return (
    <MapContainer center={[-22.9068, -43.1729]} zoom={12} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {deliveries?.map((delivery) => (
        <Marker 
          key={delivery.id}
          position={[delivery.currentLat, delivery.currentLon]}
          eventHandlers={{
            click: () => onMarkerClick(delivery.id),
          }}
        >
          <Popup>
            <div className="text-black">
              <p className="font-bold">{delivery.description}</p>
              <p className="text-xs">Status: {delivery.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}