import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import test from "@/components/HelloWorld.vue";
import login from "@/views/account/LoginPage.vue"
import register from "@/views/account/RegisterPage.vue"
import HomeView from "@/components/HomeView.vue"
import ProfileView from "@/components/ProfileView.vue"
import SettingView from "@/components/SettingView.vue"
import UserManage from "@/views/admin/UserManage.vue"
import GroupManage from "@/views/admin/GroupManage.vue"
import SiteManage from "@/views/admin/SiteManage.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
        children: [{
          path: ":filter",
          name: "params",
          component: HomeView,
        }]
      },
      {
        path: "/profile",
        name: "profile",
        component: ProfileView
      },
      {
        path: "/setting",
        name: "setting",
        component: SettingView
      },
      {
        path: "/user",
        name: "user",
        component: UserManage,
      },
      {
        path: "/group",
        name: "group",
        component: GroupManage,
      },
      {
        path: "/site",
        name: "site",
        component: SiteManage,
      }
    ]
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