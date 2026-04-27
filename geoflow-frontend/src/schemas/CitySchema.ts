import { z } from "zod";

export const CitySchema = z.object({
  id: z.number(),
  name: z.string(),
  state: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const DeliverySchema = z.object({
  id: z.number(),
  description: z.string(),
  status: z.enum(["PENDING", "IN_TRANSIT", "DELIVERED"]),
  currentLat: z.number(),
  currentLng: z.number(),
  city: CitySchema, 
});

export type DeliveryData = z.infer<typeof DeliverySchema>;