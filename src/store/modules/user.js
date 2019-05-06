import Vue from 'vue'
import Vuex from 'vuex'  // 引入Vuex

Vue.use(Vuex)  // 使用Vuex

const key = 'user'

const store = new Vuex.Store({
  // ...
  state() {
    return {
      user: '',
      token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    }
  },

  getters: {
    getStorage: function (state) {
      if (!state.user) {
        // user: {token: afdfdf, name: value, psd: value2}
        state.user = JSON.parse(localStorage.getItem(key))
      }
      return state.user
    }
  },

  mutations: {
    setStorage(state, value) {
      state.token = value
      localStorage.setItem('token', JSON.stringify(value.token))
    },
    removeStorage(state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },

  actions: {
  }
})

export default store