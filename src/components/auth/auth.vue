<template>
  <div class="auth">
    <div class="container-fluid">
      <router-link v-bind:to="'/'">Home</router-link>
    </div>
    <div class="container">
        <div class="row">
          <div class="col-12">
            <router-view></router-view>

            <div class="auth_links text-center">
              <router-link v-bind:to="'/auth/users/sign_in'" v-if="$router.currentRoute.path !== '/auth/users/sign_in'">
                {{$t('auth.links.signIn')}}
                <br>
              </router-link>

              <router-link v-bind:to="'/auth/users/sign_up'" v-if="$router.currentRoute.path !== '/auth/users/sign_up'">
                {{$t('auth.links.signUp')}}
                <br>
              </router-link>


              <router-link v-bind:to="'/auth/users/password/email'" v-if="$router.currentRoute.path !== '/auth/users/password/email'">
                {{$t('auth.links.passwordReset')}}
                <br>
              </router-link>

              <br>

            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script src='./config.js'></script>
<style scoped lang='scss' src='./styles.scss'></style>
