import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import setting from "./settings";

export const createClient = token =>
  new ApolloClient({
    link: new createHttpLink({
      uri: `${setting.backend}/graphql`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    cache: new InMemoryCache({
      addTypename: true
    })
  });
