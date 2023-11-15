import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import {
  provideApolloClient,
  useQuery,
  useResult,
} from '@vue/apollo-composable';

  
  // Cache implementation
  const cache = new InMemoryCache()
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    uri: 'https://vortex.korabli.su/api/graphql/glossary/',
    cache,
  })
  provideApolloClient(apolloClient);

  //const { result, loading, onError, onResult } = useQuery(query)
  
  //export let users = useResult(result, [], data => data.users )
  export default ApolloClient;