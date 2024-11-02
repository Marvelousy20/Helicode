import { endpoints } from "@/redux/endpoints";
import { apiSlice } from "../apiSlice";
import {
  AllCourses,
  Country,
  Payment,
  Single,
  SingleCourse,
} from "@/redux/type";

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

    getCyberSecurty: builder.query<Single, void>({
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

    getCountry: builder.query<Country[], void>({
      query: () => ({
        url: endpoints.getCountry,
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),

    getState: builder.query<Country[], string>({
      query: (state: string) => ({
        url: endpoints.getState(state),
        headers: {
          "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
          "Content-Type": "application/json",
        },
        method: "GET",
        credentials: "include" as const,
      }),
      //   transformResponse: (response: { data: any }, meta, arg) => response.data,
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
  useGetCyberSecurtyQuery,
  useGetTechnicalWritingQuery,
  useGetMarketingQuery,
  useGetCountryQuery,
  useGetStateQuery,
  useGetAllCourseDetalsQuery,
  usePaymentMutation,
} = courseApi;
