const signIn = 'signIn';
const signIn_SUCCESS = 'signIn_SUCCESS';
const signIn_ERROR = 'signIn_ERROR';

const SIGN_UP = 'SIGN_UP';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const REQUEST_PASSWORD = 'REQUEST_PASSWORD';
const REQUEST_PASSWORD_SUCCESS = 'REQUEST_PASSWORD_SUCCESS';
const REQUEST_PASSWORD_FAILURE = 'REQUEST_PASSWORD_FAILURE';

const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';

const LOGOUT = 'LOGOUT';

const AUTH_TOKEN = 'default_auth_token';

export default {
  state: {
    isLoggedIn: !!localStorage.getItem(AUTH_TOKEN),
    user: {},
    token: '',
    signIn: {
      error: null
    },
    signUp: {
      errors: {}
    },
    requestPassword: {
      errors: {}
    },
    updatePassword: {
      errors: {}
    }
  },
  mutations: {
    [signIn] (state) {
      state.signIn.error = null;
      state.pending = true;
    },
    [signIn_SUCCESS] (state, payload) {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.pending = false;
    },
    [signIn_ERROR] (state, payload) {
      state.user = {};
      state.token = null;
      state.pending = false;
      state.isLoggedIn = false;
      state.signIn.error = payload.error;
    },

    [SIGN_UP] (state) {
      state.signUp.errors = {};
      state.pending = true;
    },
    [SIGN_UP_SUCCESS] (state) {
      state.pending = false;
    },
    [SIGN_UP_FAILURE] (state, payload) {
      state.signUp.errors = payload.errors;
      state.pending = false;
    },

    [REQUEST_PASSWORD] (state) {
      state.requestPassword.errors = {};
      state.pending = true;
    },
    [REQUEST_PASSWORD_SUCCESS] (state) {
      state.pending = false;
    },
    [REQUEST_PASSWORD_FAILURE] (state, payload) {
      state.requestPassword.errors = payload.errors;
      state.pending = false;
    },

    [UPDATE_PASSWORD] (state) {
      state.updatePassword.errors = {};
      state.pending = true;
    },
    [UPDATE_PASSWORD_SUCCESS] (state) {
      state.pending = false;
    },
    [UPDATE_PASSWORD_FAILURE] (state, payload) {
      state.updatePassword.errors = payload.errors;
      state.pending = false;
    },

    [LOGOUT](state) {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
    },
  },

  actions: {
    signIn({ commit }) {
      commit(signIn);
    },
    signInSuccess({ commit }, data) {
      commit(signIn_SUCCESS, data);
    },
    signInError({ commit}, data) {
      commit(signIn_ERROR, data);
      localStorage.removeItem(AUTH_TOKEN);
    },

    signUp({ commit }) {
      commit(SIGN_UP);
    },
    signUpSuccess({ commit }) {
      commit(SIGN_UP_SUCCESS);
    },
    signUpFailure({ commit }, data) {
      commit(SIGN_UP_FAILURE, data);
    },

    requestPassword({ commit }) {
      commit(REQUEST_PASSWORD);
    },
    requestPasswordSuccess({ commit }) {
      commit(REQUEST_PASSWORD_SUCCESS);
    },
    requestPasswordFailure({ commit }, data) {
      commit(REQUEST_PASSWORD_FAILURE, data);
    },

    updatePassword({ commit }) {
      commit(UPDATE_PASSWORD);
    },
    updatePasswordSuccess({ commit }) {
      commit(UPDATE_PASSWORD_SUCCESS);
    },
    updatePasswordFailure({ commit }, data) {
      commit(UPDATE_PASSWORD_FAILURE, data);
    },

    logout({ commit }) {
      commit(LOGOUT);
      localStorage.removeItem(AUTH_TOKEN);
    },
  },

  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },

    hasSignInError: state => {
      return !!state.signIn.error;
    },
    signInError: state => {
      return state.signIn.error;
    },

    hasSignUpErrors: state => {
      return Object.keys(state.signUp.errors).length > 0;
    },
    signUpErrors: state => {
      return Object.keys(state.signUp.errors).map((key) => {
        return `${key} ${state.signUp.errors[key][0]}`
      }).join(',');
    },

    hasUpdatePasswordErrors: state => {
      return Object.keys(state.updatePassword.errors).length > 0;
    },

    updatePasswordErrors: state => {
      return Object.keys(state.updatePassword.errors).map((key) => {
        return `${key} ${state.updatePassword.errors[key][0]}`
      }).join(',');
    },

    hasRequestPasswordErrors: state => {
      return Object.keys(state.requestPassword.errors).length > 0;
    },

    requestPasswordErrors: state => {
      return Object.keys(state.requestPassword.errors).map((key) => {
        return `${key} ${state.requestPassword.errors[key][0]}`
      }).join(',');
    },
  }
}
