export default {
  name: 'UsersAuthPasswordEmail',

  data() {
    return {
      labelPosition: 'top',
      form: {
        email: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: this.$t('forms.errors.email')
          },
        ]
      }
    };
  },

  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const params = {
            user: {
              email: this.form.email
            }
          }

          this.$store.dispatch('requestPassword');
          this.$http({
            method: 'post',
            url: '/auth/users/password',
            data: params
          }).then(() => {
            this.onRequestPasswordSuccess()
          }).catch((error) => {
            this.onRequestPasswordFailure(error.response)
          });
        }
      });
    },

    onRequestPasswordSuccess() {
      this.$store.dispatch('requestPasswordSuccess');
      this.$notify({
        group: 'alerts',
        type: 'success',
        title: this.$t('auth.requestPassword.notification.successTitle'),
        text: this.$t('auth.requestPassword.notification.successMessage   ')
      });
    },

    onRequestPasswordFailure(error) {
      this.$store.dispatch('requestPasswordFailure', error.data);
      this.$notify({
        group: 'alerts',
        type: 'error',
        title: this.$t('forms.errors.serverError'),
        text: this.$t('forms.errors.serverErrorMessage')
      });
    }
  },

  computed: {
    hasRequestPasswordErrors() {
      return this.$store.getters.hasRequestPasswordErrors;
    },

    requestPasswordErrors() {
      return this.$store.getters.requestPasswordErrors;
    }
  }
}
