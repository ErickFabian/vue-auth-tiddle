import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import authDriver from '@websanova/vue-auth/drivers/auth/devise.js'
import httpDriver from '@websanova/vue-auth/drivers/http/axios.1.x.js'
import routerDriver from '@websanova/vue-auth/drivers/router/vue-router.2.x.js'

Vue.router = router

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://localhost:3000/';

Vue.use(VueAuth, {
  auth:       authDriver,
  http:       httpDriver,
  router:     routerDriver,
  deviseAuth: { tokens: ['X-USER-TOKEN', 'X-USER-EMAIL'] },

  loginData:  {
    url: '/auth/users/sign_in',
    method: 'POST',
    redirect: '/',
    fetchUser: true
  },

  registerData: {
    url: 'auth/users',
    method: 'POST',
    redirect: '/auth/users/sign_in'
  },

  parseUserData(data) {
    return data;
  }
});
