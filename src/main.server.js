import Vue from 'vue';
import App from './App.vue';
import router from './router'
import {store} from './store/store';

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
  return Promise.resolve(
    new Vue({
        store: store,
        router,
        template: '<App/>',
      render: h => h(App)
    })
  );
}