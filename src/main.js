import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(vuetify).use(router).mount("#app");
