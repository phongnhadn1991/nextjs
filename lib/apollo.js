const WP_API = process.env.WP_URL;

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: WP_API,
    cache: new InMemoryCache(),
});
