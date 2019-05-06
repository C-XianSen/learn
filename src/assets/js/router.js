import router from "../../router";

// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       name: 'logIn',
//       component: 'logIn'
//     },
//     {
//       path: '/index',
//       name: 'index',
//       component: index,
//       beforeEnter: (to, from, next) => {
//         // ...
//         if (this.$store.state.token) {
//           alert('用户已登录')
//           next()
//         } else {
//           alert('请先登录')
//           next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//           })
//         }
//       }
//     }
//   ]
// })

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
})