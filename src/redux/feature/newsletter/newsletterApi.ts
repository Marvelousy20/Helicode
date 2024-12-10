import { endpoints } from "@/redux/endpoints";
import { apiSlice } from "../apiSlice";

interface subscribersProps {
  firstName?: string;
  lastName?: string;
  email: string;
}

export const newsletterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribers: builder.mutation({
      query: (body: subscribersProps) => ({
        url: endpoints.newsletter,
        method: "POST",
        body,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useSubscribersMutation } = newsletterApi;
