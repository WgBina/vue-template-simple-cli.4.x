import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/test1',
      meta: { title: 'head1', icon: 'link' },
      children: [
        {
          path: 'test1',
          component: () => import('@/views/test1'),
          name: 'test1',
          meta: { title: 'test1', icon: 'link' },
          children: [
            {
              path: 'test3',
              component: () => import('@/views/test2'),
              name: 'test3',
              meta: { title: 'test3', icon: 'link', activeMenu: '/test1' },
              hidden: true
            }
          ]
        },
        {
          path: 'test2',
          component: () => import('@/views/test2'),
          name: 'test2',
          meta: { title: 'test2', icon: 'link' }
        }
      ]
    }
    // 404 page must be placed at the end !!!
    // { path: '*', redirect: '/404', hidden: true }
  ]
})

export default router
