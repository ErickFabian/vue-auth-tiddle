import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/home';

import Auth from '@/components/auth/auth';
import UsersAuth from '@/components/auth/users/users';
import UsersAuthSignIn from '@/components/auth/users/sign_in/sign_in';
import UsersAuthSignUp from '@/components/auth/users/sign_up/sign_up';
import UsersAuthPassword from '@/components/auth/users/password/password';
import UsersAuthPasswordEdit from '@/components/auth/users/password/edit/edit';
import UsersAuthPasswordEmail from '@/components/auth/users/password/email/email';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,

      children: [
        {
          path: 'users',
          name: 'UsersAuth',
          component: UsersAuth,

          children: [
            {
              path: 'sign_in',
              name: 'UsersAuthSignIn',
              component: UsersAuthSignIn
            },
            {
              path: 'sign_up',
              name: 'UsersAuthSignUp',
              component: UsersAuthSignUp
            },
            {
              path: 'password',
              name: 'UsersAuthPassword',
              component: UsersAuthPassword,

              children: [
                {
                  path: 'edit',
                  name: 'UsersAuthPasswordEdit',
                  component: UsersAuthPasswordEdit
                },
                {
                  path: 'email',
                  name: 'UsersAuthPasswordEmail',
                  component: UsersAuthPasswordEmail
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
