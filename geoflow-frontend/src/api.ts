import { deliveryListSchema, type Delivery } from "./schemas/DeliverySchema";

export async function getDeliveries(): Promise<Delivery[]> {
  const response = await fetch('http://localhost:8080/api/deliveries');
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Failed to fetch deliveries`);
  }

  const data = await response.json();
  
  const result = deliveryListSchema.safeParse(data);

  if (!result.success) {
    console.error("Schema Validation Error:", result.error.format());
    throw new Error("API returned invalid data format");
  }

  return result.data;
}