export default {
  name: 'UsersAuthPasswordEdit',

  data() {
    var confirmation = (rule, value, callback) => {
      if (value === '') {
        callback(new Error());
      } else if (value !== this.form.password) {
        callback(new Error());
      } else {
        callback();
      }
    };
    return {
      labelPosition: 'top',
      form: {
        password: '',
        passwordConfirmation: ''
      },
      rules: {
        password: [
          {
            required: true,
            message: this.$t('forms.errors.required')
          },
          {
            min: 6,
            message: this.$t('forms.errors.minLength', { length: 6 } )
          }
        ],
        passwordConfirmation: [
          {
            required: true,
            validator: confirmation,
            message: this.$t('forms.errors.confirmation', {
              field_to_confirm: this.$t('forms.labels.password')
            })
          }
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
              password: this.form.password,
              password_confirmation: this.form.passwordConfirmation,
              reset_password_token: this.$store.state.route.query.reset_password_token
            }
          };

          this.$store.dispatch('updatePassword');
          this.$http({
            method: 'PUT',
            url: '/auth/users/password',
            data: params
          }).then(() => {
            this.onUpdatePasswordSuccess()
          }).catch((error) => {
            this.onUpdatePasswordFailure(error.response)
          });
        }
      });
    },

    onUpdatePasswordSuccess() {
      this.$store.dispatch('updatePasswordSuccess');
      this.$router.push({ name: 'UsersAuthSignIn' })
      this.$notify({
        group: 'alerts',
        type: 'success',
        title: this.$t('auth.updatePassword.notification.successTitle'),
        text: this.$t('auth.updatePassword.notification.successMessage   ')
      });
    },

    onUpdatePasswordFailure(error) {
      this.$store.dispatch('updatePasswordFailure', error.data);
      this.$notify({
        group: 'alerts',
        type: 'error',
        title: this.$t('forms.errors.serverError'),
        text: this.$t('forms.errors.serverErrorMessage')
      });
    }
  },

  computed: {
    hasUpdatePasswordErrors() {
      return this.$store.getters.hasUpdatePasswordErrors;
    },

    updatePasswordErrors() {
      return this.$store.getters.updatePasswordErrors;
    }
  }
}
