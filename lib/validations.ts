import * as z from "zod";

export const SellerSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  bussinessName: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  pincode: z.string().min(1),
});

export const CustomerSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  pincode: z.number(),
});
