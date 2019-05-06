import store from "../store/modules/user";
import router from "../router";

// 
axios.defaults.headers.common['token'] = $store.state.token
// 添加请求拦截器
axios.interceptors.request.use(config => {
    if ($store.state.token || localStorage.getItem('token')) {
      config.headers.common['token'] = $store.state.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器(假如是401)
axios.interceptors.request.use(response => {
  return response
  },
  error => {
    if (error.response && $store.state.token) {
      switch (error.response.status) {
        case 401:
          $store.commit('removeStorage')
          alert("请重新登录")
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)