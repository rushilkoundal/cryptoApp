import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
  'X-RapidAPI-Key': '8c7087fc40msh6489e5f96d2d478p18f2b8jsn358b74ea5345',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const creatRequest = (url) => ({ url, headers: cryptoApiHeader })

export const cryptoApi = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => creatRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => creatRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => creatRequest(`/coin/${coinId}/history/?timeperiod=${timePeriod}`)
    })
  })
});

export const { useGetCryptosQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery } = cryptoApi;