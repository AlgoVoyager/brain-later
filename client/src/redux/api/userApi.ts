import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserDetails } from '../../utils/types';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/v1',
        credentials: 'include', // Include cookies for authentication
        prepareHeaders: (headers) => {
            // Get token from localStorage
            const token = localStorage.getItem('token');

            // If token exists, add it to headers
            if (token) {
                headers.set('token', `${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUser: builder.query<UserDetails, void>({
            query: () => '/user/getUser',
        }),
    }),
});

export const { useGetUserQuery } = userApi;
