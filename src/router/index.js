import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/test",
      name: "Test",
      component: () => import("../views/Test.vue"),
    },
    {
      path: "/crazypanda",
      redirect: { name: "Home" },
      component: () => import("../layout/MainLayout.vue"),
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "me",
          name: "AboutMe",
          component: () => import("../views/MainButton/AboutMe.vue"),
        },
        {
          path: "family",
          name: "MyFamily",
          component: () => import("../views/MainButton/MyFamily.vue"),
        },
        {
          path: "lover",
          name: "MyLover",
          component: () => import("../views/MainButton/MyLover.vue"),
        },
      ],
    },
  ],
});

export default router;
