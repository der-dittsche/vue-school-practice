import {createRouter, createWebHistory} from 'vue-router';
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        alias: '/home'

    },
    {
        path: '/welcome',
        redirect: {name: 'home'},
    },
    {
        path: '/protected',
        name: 'protected',
        components: {
            default: ()=> import('@/views/ProtectedView.vue'),
            LeftSidebar: () => import('@/components/LeftSidebar.vue')
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/views/LoginView.vue')
    },
    {
        path: '/login/username/:username?/password/:password?/',
        name: 'login',
        component: ()=> import('@/views/LoginView.vue')
    },
    {
        path: '/example/:id(\\d+)+',
        component: ()=> import('@/views/LoginView.vue')
    },
    {
        path: '/invoices',
        name: 'invoices',
        components: {
            default: ()=> import('@/views/InvoiceView.vue'),
            LeftSidebar: () => import('@/components/LeftSidebar.vue')
        },
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/destination/:id(\\d+)/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationView.vue'),
        props: route => ({id: parseInt(route.params.id)}),
        beforeEnter(to, from, next) {
            const destination = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.id) && destination.slug === to.params.slug
            );
            if (!destination) {
                return next({
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash
                });
            }
            next();
        },

        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id: parseInt(route.params.id)}),
                beforeEnter(to, from, next) {
                    const destination = sourceData.destinations.find(
                        destination => destination.id === parseInt(to.params.id) && destination.slug === to.params.slug
                    );
                    if (!destination) {
                        return next({
                            name: 'NotFound',
                            params: {pathMatch: to.path.split('/').slice(1)},
                            query: to.query,
                            hash: to.hash
                        });
                    }
                    const experience = destination.experiences.find(
                        experience => experience.slug === to.params.experienceSlug
                    );
                    if (!experience) {
                        return next({
                            name: 'NotFound',
                            params: {pathMatch: to.path.split('/').slice(1)},
                            query: to.query,
                            hash: to.hash
                        });
                    }
                    next();
                },
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from,savePosition) {
        return savePosition || new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve({top:0, behavior: 'smooth'})
            }, 300)
        })
    }
});

router.beforeEach((to, from)=> {
    if(to.meta.requiresAuth && !window.user) {
        return {name: 'login', query:{ redirect: to.fullPath }}
    }
})

export default router;
