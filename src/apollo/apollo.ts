import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import {
  provideApolloClient,
} from '@vue/apollo-composable';

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  uri: 'https://vortex.korabli.su/api/graphql/glossary/',
  cache,
})
provideApolloClient(apolloClient);

export default ApolloClient;