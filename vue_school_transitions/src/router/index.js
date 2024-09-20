import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'one',
      component: () => import('../views/Part1View.vue')
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('../views/Part2View.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('../views/Part3View.vue')
    }
  ]
})

export default router
