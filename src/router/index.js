import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import test from "@/components/HelloWorld.vue";
import login from "@/views/account/LoginPage.vue"
import register from "@/views/account/RegisterPage.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;