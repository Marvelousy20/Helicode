import { endpoints } from "@/redux/endpoints";
import { apiSlice } from "../apiSlice";
import {
  AllCourses,
  Country,
  Payment,
  Single,
  SingleCourse,
  PayWithCoinsub,
} from "@/redux/type";

interface State {
  name: string;
  iso2: string;
  state_code: string;
}

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query<AllCourses, void>({
      query: () => ({
        url: endpoints.getCourses,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    getCyberSecurity: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getCyberSecurity,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    getTechnicalWriting: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getTechnicalWriting,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),
    getMarketing: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getMarketing,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    getSmartContractDevelopment: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getSmartContractDevelopment,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    getWeb3Research: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getWeb3Research,
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    getAIAgent: builder.query<Single, void>({
      query: () => ({
        url: endpoints.getAiAgent,
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    getCountry: builder.query<Country[], void>({
      query: () => ({
        url: endpoints.getCountry,
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
        },
      }),
      transformResponse: (response: Country[]) =>
        response
          .map((country) => ({
            id: country.id,
            name: country.name,
            code: country.iso2,
            currency: country.currency,
            capital: country.capital,
            emoji: country.emoji,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)),
    }),

    getState: builder.query<State[], string>({
      query: (countryCode) => ({
        url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        headers: {
          "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
        },
      }),
      // Skip the query if no countryCode is provided
      // skip: (countryCode) => !countryCode,
    }),

    getAllCourseDetals: builder.query<Single, string>({
      query: (course: string) => ({
        url: endpoints.getCourseDetails(course),
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    payment: builder.mutation({
      query: (body: Payment) => ({
        url: endpoints.makePayment,
        method: "POST",
        body,
        credentials: "include" as const,
      }),
    }),

    payWithCoinsub: builder.mutation({
      query: (body: PayWithCoinsub) => ({
        url: endpoints.payWithCoinsub,
        method: "POST",
        body,
        credentials: "include" as const,
      }),
    }),

    payWithBlockradar: builder.mutation({
      query: (body: PayWithCoinsub) => ({
        url: endpoints.payWithBlockradar,
        method: "POST",
        body,
        credentials: "include" as const,
      }),
    }),
  }),
});
export const {
  useGetAllCoursesQuery,
  useGetCyberSecurityQuery,
  useGetTechnicalWritingQuery,
  useGetMarketingQuery,
  useGetWeb3ResearchQuery,
  useGetCountryQuery,
  useGetStateQuery,
  useGetAllCourseDetalsQuery,
  usePaymentMutation,
  useGetSmartContractDevelopmentQuery,
  usePayWithCoinsubMutation,
  useGetAIAgentQuery,
  usePayWithBlockradarMutation,
} = courseApi;
