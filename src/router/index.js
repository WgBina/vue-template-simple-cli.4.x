import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

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
            redirect: '/dashboard',
            meta: { title: 'head1', icon: 'link' },
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/dashboard'),
                    name: 'dashboard',
                    meta: { title: 'dashboard', icon: 'link' }
                    // children: [
                    //         {
                    //             path: 'test3',
                    //             component: () => import('@/views/test2'),
                    //             name: 'test3',
                    //             meta: {
                    //                 title: 'test3',
                    //                 icon: 'link',
                    //                 activeMenu: '/dashboard'
                    //             },
                    //             hidden: true
                    //         }
                    //     ]
                },
                {
                    path: 'data-manage',
                    component: () => import('@/views/data-manage'),
                    name: 'data-manage',
                    meta: { title: 'data-manage', icon: 'link' }
                }
            ]
        }
        // 404 page must be placed at the end !!!
        // { path: '*', redirect: '/404', hidden: true }
    ]
});

export default router;
