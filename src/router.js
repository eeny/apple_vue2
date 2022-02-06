import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";

const routes = [
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anithing(.*)",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
