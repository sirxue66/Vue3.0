import {createRouter,createWebHashHistory,createMemoryHistory} from "vue-router"


const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
{
    path: '/',
    name: 'home',
    component: () => import("../views/home.vue")
},
{
    path: '/detail',
    alias: '/vue3detail',       //路由别名，访问别名跟访问path一样
    name: 'detail',
    component: () => import("../views/detail.vue")
},
/**
 *  path: '/news/:id+'     表示可以有多个参数，至少有一个,可以重复
 *  path: '/news/:id*'     可有多个参数，可没有参数
 */
{
    path: '/news/:id',
    name: 'news',
    component: () => import("../views/news.vue")
},
/**
 * 子路由
 */
{
    path: '/user/:type',
    name: 'user',
    component: () => import("../views/user/index.vue"),
    children:[
        {
            path: 'children',
            component: () => import('../views/user/children.vue')
        },
        {
            path: 'brother',
            component: () => import('../views/user/brother.vue')
        }
    ]
},
/**
 * 非路由地址跳转公共错误页面
 */
{
    path: '/:path(.*)',   //将params利用正则进行特殊规定
    name: "notFound",
    component: () => import('../views/notfound.vue')
},
/**
 * 路由重定向
 */
{
    path: '/homedetail',
    name: "chongdingxiang",
    redirect: () => {return {path: '/detail'}} 
}
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router