export default {
  name: 'UsersAuthsignIn',

  data() {
    return {
      labelPosition: 'top',
      serverError: false,
      serverErrorMessage: this.$t('forms.errors.serverError'),
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: this.$t('forms.errors.email')
          },
        ],
        password: [
          {
            required: true,
            message: this.$t('forms.errors.required')
          }
        ]
      }
    };
  },

  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.serverError = false

          const params = {
            user: {
              email: this.form.email,
              password: this.form.password
            }
          }

          this.$store.dispatch('signIn')

          this.$auth.login({
            data: params,
            rememberMe: this.form.rememberMe
          }).then((response) => {
            this.onsignInSuccess(response)
          }).catch((error) => {
            this.onsignInFailure(error.response)
          });
        }
      });
    },

    onsignInSuccess(response) {
      let token = response.data.token + ';' + response.data.user.email;
      let user = response.data.user;

      this.$auth.token(null, token)
      this.$auth.user(user);
      this.$store.dispatch('signInSuccess', {token: token, user:user});
      this.$notify({
        group: 'alerts',
        type: 'success',
        title: this.$t('auth.signIn.notification.successTitle'),
        text: this.$t('auth.signIn.notification.successMessage   ')
      });
    },

    onsignInFailure(error) {
      this.$store.dispatch('signInError', { error: error.data.error })
      this.$notify({
        group: 'alerts',
        type: 'error',
        title: this.$t('forms.errors.serverError'),
        text: this.$t('forms.errors.serverErrorMessage')
      });
    }
  },

  computed: {
    hasSignInError() {
      return this.$store.getters.hasSignInError;
    },

    signInError() {
      return this.$store.getters.signInError;
    }
  }
}
