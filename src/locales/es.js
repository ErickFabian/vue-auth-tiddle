export default {
  es: {
    auth: {
      signIn: {
        title: 'Ingresar',
        notification: {
          successTitle: 'Ingresaste correctamente',
          successMessage: '¡Hola! Bienvenido a tu dashboard',
        }
      },
      signUp: {
        title: 'Registrarme',
        notification: {
          successTitle: 'Te has registrado correctamente',
          successMessage: '¡Bienvenido a la plataforma!',
        }
      },

      requestPassword: {
        title: 'Solicitar cambio de contraseña',
        notification: {
          successTitle: 'Tu solicitud de cambio de contraseña fue enviada!',
          successMessage: 'Deberas recibir un correo con las instrucciones para que puedas actualizar tu contraseña',
        }
      },

      updatePassword: {
        title: 'Cambiar mi contraseña',
        notification: {
          successTitle: 'Has cambiado tu contraseña correctamente',
          successMessage: '¡Intenta ingresar con tu nueva contraseña!',
        }
      },

      passwordEmail: {
        title: 'Recuperar Contraseña'
      },
      passwordConfirmation: {
        title: 'Confirmar Contraseña'
      },
      links: {
        signIn: 'Ingresar',
        signUp: 'Registrarme',
        passwordReset: 'Recuperar contraseña',
        passwordConfirmation: 'Confirmar contraseña'
      }
    },
    buttons: {
      register: 'Registrarme',
      signIn: 'Ingresar',
      recoverPassword: 'Enviarme instrucciones para cambiar contraseña',
      confirmPassword: 'Confirmar cambio de contraseña'
    },
    forms: {
      placeholders: {
        name: 'Ingresa tu nombre',
        email: 'Ingresa tu correo',
        password: 'Ingresa tu contraseña',
        passwordConfirmation: 'Confirma tu contraseña'
      },
      labels: {
        name: 'Nombre',
        email: 'Email',
        password: 'Contraseña',
        passwordConfirmation: 'Confirmacion de contraseña'
      },
      errors: {
        serverError: 'Ocurrio un error',
        serverErrorMessage: 'Por favor, revisa los errores en el formulario',
        required: 'El campo es requerido',
        email: 'El campo debe ser un email valido',
        confirmation: 'El campo debe coincidir con {field_to_confirm}',
        minLength: 'El campo debe tener al menos {length} caracteres'
      }
    }
  }
}
