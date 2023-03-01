import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': '5592c5bff9msh65e9bebbe65baccp1ae0e2jsn7694880da33a',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
};

const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search';

const createRequest = ( url ) => ( { url, headers: cryptoNewsApiHeaders } );

export const cryptoNewsApi = createApi( {
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery( { baseUrl } ),
    endpoints: ( builder ) => ( {
        getCryptoNews: builder.query( {
            query: ( { count } ) => createRequest( `/NewsSearchAPI?q='cryptocurrency'&pageSize=${ count }` ),
        } )
    } )
} );

export const { useGetCryptoNewsQuery, } = cryptoNewsApi;
