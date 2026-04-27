import { DeliverySchema, type DeliveryData } from "./schemas/CitySchema";
import { z } from "zod"

export async function getCoords(): Promise<DeliveryData[]> {
    const response = await fetch('http://localhost:8080/api/deliveries');
    
    if (!response.ok) throw new Error("Falha ao carregar as entregas")

    const data = await response.json(); 

    return  z.array(DeliverySchema).parse(data) 
}

