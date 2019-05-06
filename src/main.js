// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView'
import 'iview/dist/styles/iview.css'
import headerBar from './components/headerBar.vue'
// import axios from 'axios'
import store from './store/modules/user'

Vue.use(iView)
Vue.component(headerBar.name, headerBar)

// // 请求头添加token
// axios.defaults.headers.common['token'] = $store.state.token
// // 添加请求拦截器
// axios.interceptors.request.use(config => {
//     if ($store.state.token || localStorage.getItem('token')) {
//       config.headers.common['token'] = $store.state.token
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// // http response 拦截器(假如是401)
// axios.interceptors.request.use(response => {
//   return response
//   },
//   error => {
//     if (error.response && $store.state.token) {
//       switch (error.response.status) {
//         case 401:
//           $store.commit('removeStorage')
//           alert("请重新登录")
//           router.replace({
//             path: '/login',
//             query: { redirect: router.currentRoute.fullPath }
//           })
//       }
//     }
//     return Promise.reject(error.response.data)
//   }
// )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
