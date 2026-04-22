import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
}

export default function Map({}: Props) {
  return (
    <MapContainer 
        center={[10, 15]} 
        zoom={5} 
        scrollWheelZoom={true}
        style={{width: '100%', height: '100%'}}
    >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    <Marker position={[10, 15]} />
  </MapContainer>
  )
}