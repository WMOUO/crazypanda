import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/Test.vue'),
    },
    {
      path: '/crazypanda',
      name: 'Panda',
      redirect:'/crazypanda/home',
      component: () => import('../layout/MainLayout.vue'),
      children:[
        {
          path:'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path:'me',
          name: 'AboutMe',
          component: () => import('../views/MainButton/AboutMe.vue'),
        },
        {
          path:'family',
          name: 'MyFamily',
          component: () => import('../views/MainButton/MyFamily.vue'),
        },
        {
          path:'lover',
          name: 'MyLoover',
          component: () => import('../views/MainButton/MyLover.vue'),
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PandaInstagram.vue')
    }
  ]
})

export default router
