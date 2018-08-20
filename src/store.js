import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from '@/stores/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: AuthStore
  }
})
