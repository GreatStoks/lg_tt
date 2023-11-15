import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloClient from './apollo/apollo';


const app = createApp(App);
app.provide('$apollo', apolloClient);
app.use(store).use(router).mount('#app');
