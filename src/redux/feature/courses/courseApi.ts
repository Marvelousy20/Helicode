import { endpoints } from "@/redux/endpoints";
import { apiSlice } from "../apiSlice";
import {
  AllCourses,
  Country,
  Payment,
  Single,
  SingleCourse,
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

    // getCountry: builder.query<Country[], void>({
    //   query: () => ({
    //     url: endpoints.getCountry,
    //     method: "GET",
    //     credentials: "include" as const,
    //     headers: {
    //       "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
    //     },
    //     redirect: "follow",
    //   }),
    //   //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    //   transformResponse: (response: any[]) =>
    //     response
    //       .map((country) => ({
    //         name: country.name.common,
    //         code: country.cca2,
    //       }))
    //       .sort((a, b) => a.name.localeCompare(b.name)),
    // }),

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

    // getState: builder.query<Country[], string>({
    //   query: (state: string) => ({
    //     url: endpoints.getState(state),
    //     headers: {
    //       "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
    //       "Content-Type": "application/json",
    //     },
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),

    //   //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    // }),

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
} = courseApi;
