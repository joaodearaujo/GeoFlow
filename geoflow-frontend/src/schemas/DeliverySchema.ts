import { z } from 'zod';

const addressSchema = z.object({
  state: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.number(),
  latitude: z.number(),
  longitude: z.number(),
});

const driverSchema = z.object({
  id: z.number(),
  name: z.string(),
  phoneNumber: z.string(),
});

const routeSchema = z.object({
  origin: addressSchema,
  destiny: addressSchema,
});

const packSchema = z.object({
  weight: z.number(),
});

export const deliverySchema = z.object({
  id: z.number(),
  description: z.string(),
  status: z.enum(['pending', 'in_transit', 'delivered', 'canceled']), 
  currentLat: z.number(),
  currentLon: z.number(),
  driver: driverSchema,
  route: routeSchema,
  pack: packSchema,
});

export const deliveryListSchema = z.array(deliverySchema);

export type Address = z.infer<typeof addressSchema>;
export type Driver = z.infer<typeof driverSchema>;
export type Route = z.infer<typeof routeSchema>;
export type Pack = z.infer<typeof packSchema>;
export type DeliveryList = z.infer<typeof deliveryListSchema>;

export type Delivery = z.infer<typeof deliverySchema>;