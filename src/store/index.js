import Vue from 'vue'
import Vuex from 'vuex'  // 引入Vuex

Vue.use(Vuex)  // 使用Vuex

// 创建Vuex实例
const store = new Vuex.Store({
  // ...
  state: {
    count: 1
  },
  getters: {
    
  }
})

export default store  // 导出store