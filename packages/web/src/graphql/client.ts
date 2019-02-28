import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
});

const authLink = setContext(async (_, { headers }) => {
    // Return the headers to the context so httpLink can read them.
    return {
        headers: {
            ...headers,
            Authorization: await localStorage.getItem("token")
        }
    };
});

const client = new ApolloClient({
    // @ts-ignore
    link: authLink.concat(httpLink),
    cache
});

export default client;
