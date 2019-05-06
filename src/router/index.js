import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import logIn from '@/components/logIn'
import signUp from '@/components/signUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp
    }
  ]
})

// router.beboreEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     let token = localStorage.getItem('token')

//     if (token === '') {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })