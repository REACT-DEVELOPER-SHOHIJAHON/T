import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSignUp: build.mutation({
      query: ({ email, password }) => ({
        url: "/register",
        method: "POST",
        body: {
            email,
            password,
        },
      }),
    }),
    getLogIn: build.mutation({
        query: ({ email, password }) => ({
          url: "/login",
          method: "POST",
          body: {
              email,
              password,
          },
        }),
      }),
  }),
});

export const {
    useGetSignUpMutation,
    useGetLogInMutation,
    } = authApi;
export default authApi;
