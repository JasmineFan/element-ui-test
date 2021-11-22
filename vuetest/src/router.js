import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import a from './components/a'

Vue.use(Route)

const routes = [
    { path: '/a', component: a, meta: {title: 'a'} },
    { path: '/hello-world', component: HelloWorld  , meta: {title: 'hello-world'}}
]
const router = new Route({
    routes
})

// Vue.mixin({
//     beforeCreate(){
//         console.log(this.$router, this.$route)
//         if (this.$route.meta.title){
//             document.title = this.$route.meta.title
//         } else {
//             document.title ='project title'
//         }    
//     }
// })

console.log('router', router)
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to, from)
    next()
})

router.afterEach((to, from) => {
    console.log('afterEach', to, from)
})



export default router