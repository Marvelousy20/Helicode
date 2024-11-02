import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "../endpoints";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    prepareHeaders: (headers, { getState }: any) => {
      // const token = getState().auth.token;
      const states = endpoints.getState;
      // console.log("confirm", token);
      headers.set("Accept", "application/json");

      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      // }
      // return headers;
    },
  }),
  //   tagTypes: ["admin", "role", "driver", "commuter", "profile", "fareSetting"],
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
