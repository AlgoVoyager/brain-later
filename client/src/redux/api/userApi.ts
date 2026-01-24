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
        changeUserName: builder.mutation<{message: string} , {fullname: string}>({
            query: ({fullname}) => ({
                url: '/user/changeName',
                method: 'PATCH',
                body: { fullname }
            }),
        }),
        changePassword: builder.mutation<{message: string} , {newPassword: string, oldPassword: string}>({
            query: ({newPassword, oldPassword}) => ({
                url: '/user/changePassword',
                method: 'PATCH',
                body: { newPassword, oldPassword }
            }),
        }),
    }),
});

export const { useGetUserQuery, useChangeUserNameMutation, useChangePasswordMutation } = userApi;
