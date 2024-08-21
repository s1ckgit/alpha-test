import { CardsApiResponse } from './../../types';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getCards: builder.query<CardsApiResponse, void>({
      query: () => 'photos?_limit=50',
      keepUnusedDataFor: 300
    })
  })
});

export const { useGetCardsQuery } = cardsApi;
