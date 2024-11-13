import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const originalPush = createRouter.prototype.push;
const originalReplace = createRouter.prototype.replace;
createRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch((err) => err);
};
createRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject);
    }
    return originalReplace.call(this, location).catch((err) => err);
};

const modules = import.meta.glob('../views/**/*.vue');

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: modules[`../views/404/404.vue`] },
    {
        path: '/login',
        name: 'login',
        component: modules['../views/login/Login.vue'],
    },
    {
        path: '/',
        component: modules[`../views/layout/Layout.vue`],
        name: 'layout',
        redirect: '/user',
        children: [
            //用户管理
            {
                path: '/user',
                name: 'user',
                component: modules[`../views/user/User.vue`],
                meta: {
                    title: '用户管理',
                    Webtitle: '用户管理',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //仪表盘
            {
                path: '/home',
                name: 'home',
                component: modules[`../views/home/Home.vue`],
                meta: {
                    title: '仪表盘',
                    Webtitle: '仪表盘',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //私信任务
            {
                path: '/private',
                name: 'private',
                component: modules[`../views/task/Private.vue`],
                meta: {
                    title: '私信任务',
                    Webtitle: '私信任务',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //动态任务
            {
                path: '/dynamic',
                name: 'dynamic',
                component: modules[`../views/task/Dynamic.vue`],
                meta: {
                    title: '动态任务',
                    Webtitle: '动态任务',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //拉群任务
            {
                path: '/group',
                name: 'group',
                component: modules[`../views/task/Group.vue`],
                meta: {
                    title: '拉群任务',
                    Webtitle: '拉群任务',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //wa素材
            {
                path: '/wa',
                name: 'wa',
                component: modules[`../views/material/Wa.vue`],
                meta: {
                    title: 'WhatsApp素材',
                    Webtitle: 'WhatsApp素材',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
            //tk素材
            {
                path: '/tk',
                name: 'tk',
                component: modules[`../views/material/Tk.vue`],
                meta: {
                    title: 'Tk素材',
                    Webtitle: 'Tk素材',
                    active: false,
                    keepAlive: false, //需要被缓存的组件
                },
            },
        ],
    },
];

const router = new createRouter({
    routes,
    history: createWebHistory(), //history模式
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

router.afterEach((to, from) => {
    NProgress.done();
    window.document.title = to.meta.Webtitle || '任务网管理后台';
    // firefox
    document.documentElement.scrollTop = 0;
});

export default router;
