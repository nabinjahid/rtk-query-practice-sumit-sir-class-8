import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["posts", "post"],
    // refetchOnReconnect: true,
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit) => `/posts?_limit=${limit}`,
            providesTags: ["posts"],
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: (result, error, arg) => [{ type: "post", id: arg }],
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: `/posts`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["posts"],
        }),
        editPost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "post", id: arg.id },
            ],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useEditPostMutation,
} = apiSlice;
