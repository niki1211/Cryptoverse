import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '5592c5bff9msh65e9bebbe65baccp1ae0e2jsn7694880da33a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = ( url ) => ( { url, headers: cryptoApiHeaders } );

export const cryptoApi = createApi( {
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery( { baseUrl } ),
    endpoints: ( builder ) => ( {
        getCryptos: builder.query( {
            query: () => createRequest( '/coins' )
        } )
    } )
} );

export const { useGetCryptosQuery, } = cryptoApi;