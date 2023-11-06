import { createApp } from 'vue';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloClients } from 'vue3-apollo';
import { createStore } from 'vuex'

const apolloClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com',
  cache: new InMemoryCache(),
});

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


