import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CardProps, formInterface, updateFormInterface } from '../../utils/types';
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
        fetchContents: builder.query<CardProps[], void>({
            query: () => ({
                url: '/content',
                method: 'GET',
            }),
        }),
        addContentRequest: builder.mutation<{message:string,content:CardProps}, formInterface>({
            query: (form) => ({
                url: '/content',
                method: 'POST',
                body: form
            }),
        }),
        updateContentRequest: builder.mutation<{message:string,content:CardProps}, updateFormInterface>({
            query: (form) => ({
                url: '/content',
                method: 'PUT',
                body: form
            }),
        }),
        deleteContentRequest: builder.mutation<{message:string}, {contentId: string}>({
            query: ({contentId}) => ({
                url: '/content/' + contentId,
                method: 'DELETE',
            }),
        }),
        toggleShareContent: builder.mutation<{message:string}, {contentId: string}>({
            query: ({contentId}) => ({
                url: '/brain/share',
                method: 'PATCH',
                body: { contentId }
            }),
        }),
        removeAllShared: builder.mutation<{message:string}, void>({
            query: () => ({
                url: '/brain/share/remove-all',
                method: 'PATCH',
            }),
        }),
    }),
});

export const { 
    useToggleShareContentMutation, 
    useAddContentRequestMutation, 
    useUpdateContentRequestMutation,
    useDeleteContentRequestMutation, 
    useFetchContentsQuery, 
    useRemoveAllSharedMutation 
} = contentApi;
