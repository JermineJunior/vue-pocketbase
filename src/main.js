import "./assets/main.css";

import { createApp, markRaw } from "vue";
import { createPinia } from 'pinia'
import router from "./router";
import App from "./App.vue";

const pinia = createPinia()
//add a plugin to our store
pinia.use(({ store }) => {
      store.router = markRaw(router)
})
createApp(App)
      .use(router)
      .use(pinia)
      .mount("#app");
