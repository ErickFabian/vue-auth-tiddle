<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>

    <b-navbar-brand>
      Brand
    </b-navbar-brand>


    <b-navbar-nav class="ml-auto">
      <b-collapse is-nav id="nav_text_collapse" class="text-right">
        <b-nav-item-dropdown :text="$auth.user().email" right v-if="isLoggedIn">
          <b-dropdown-item @click="logout">
            Logout
          </b-dropdown-item>
        </b-nav-item-dropdown>

          <b-navbar-nav v-if="!isLoggedIn">
            <router-link v-bind:to="'/auth/users/sign_in'" >
              <b-button variant="outline-secondary">
                Sign in
              </b-button>
            </router-link>
          </b-navbar-nav>

          <b-navbar-nav v-if="!isLoggedIn">
            <router-link v-bind:to="'/auth/users/sign_up'" >
              <b-button variant="outline-secondary">
                Sign up
              </b-button>
            </router-link>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar-nav>


  </b-navbar>
</template>

<script src='./config.js'></script>
