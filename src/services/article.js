import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = import.meta.env.VITE_BASE_URL;
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_ARTICLE_HOST;
const lengthInParagraphs = Number(import.meta.env.VITE_LENGTH_IN_PARAGRAPHS);
const lang = import.meta.env.VITE_ARTICLE_LANG;
// console.log(rapidApiKey, rapidApiHost);
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", rapidApiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present
      // in the parameter values
      // If we do not properly encode these characters,
      // they can be misinterpreted by the server and cause errors or unexpected behavior.
      // Thus that RTK bug
      query: (params) =>
        `summarize?url=${encodeURIComponent(
          params.articleUrl
        )}&length=${lengthInParagraphs}&lang=${lang}`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
