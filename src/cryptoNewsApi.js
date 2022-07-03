import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '8c7087fc40msh6489e5f96d2d478p18f2b8jsn358b74ea5345',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const creatRequest = (url) => ({ url, headers: cryptoNewsHeader })

export const cryptoNewsApi = createApi({
    reducerPath: 'createNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptosNews: builder.query({
        query: (count) => creatRequest(`/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    })
  });

  export const { useGetCryptosNewsQuery } = cryptoNewsApi;