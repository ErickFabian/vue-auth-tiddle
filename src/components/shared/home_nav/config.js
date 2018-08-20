import Vue from 'vue';
import HomeNav from '@/components/shared/home_nav/home_nav';

Vue.component('home-nav', HomeNav)

export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
}
