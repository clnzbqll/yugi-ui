/* Vue路由管理器 */
import { createWebHistory, createRouter } from 'vue-router'
import Layout from '@/layout'

// 公共路由
export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard'),
        name: 'Dashboard',
        meta: { title: '首页', titleEn: 'Dashboard', icon: 'task', affix: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
