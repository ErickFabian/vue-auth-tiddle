export default {
  name: 'UsersAuthSignUp',

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
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t('forms.errors.required')
          }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: this.$t('forms.errors.email')
          },
        ],
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
              name: this.form.name,
              email: this.form.email,
              password: this.form.password,
              password_confirmation: this.form.passwordConfirmation
            }
          }

          this.$store.dispatch('signUp');
          this.$auth.register({
            data: params
          }).then(() => {
            this.onSignUpSuccess()
          }).catch((error) => {
            this.onSignUpFailure(error.response)
          });
        }
      });
    },

    onSignUpSuccess() {
      this.$store.dispatch('signUpSuccess');
      this.$notify({
        group: 'alerts',
        type: 'success',
        title: this.$t('auth.signIn.notification.successTitle'),
        text: this.$t('auth.signIn.notification.successMessage   ')
      });
    },

    onSignUpFailure(error) {
      this.$store.dispatch('signUpFailure', error.data);
      this.$notify({
        group: 'alerts',
        type: 'error',
        title: this.$t('forms.errors.serverError'),
        text: this.$t('forms.errors.serverErrorMessage')
      });
    }
  },

  computed: {
    hasSignUpErrors() {
      return this.$store.getters.hasSignUpErrors;
    },

    signUpErrors() {
      return this.$store.getters.signUpErrors;
    }
  }
}
