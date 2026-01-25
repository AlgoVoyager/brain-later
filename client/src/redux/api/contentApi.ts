import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contentApi = createApi({
    reducerPath: 'contentApi',
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
        shareContent: builder.mutation<{message:string}, {contentId: string}>({
            query: ({contentId}) => ({
                url: '/brain/share',
                method: 'PATCH',
                body: { contentId }
            }),
        }),
    }),
});

export const { useShareContentMutation } = contentApi;
