'use strict'

class Login {
  get rules () {
    return {
      email: "required|email",
      password: "required|min:6"
    }
  }

  get messages() {
    return {
      "email.required": "Must provide an email address",
      "email.email": "Email must be a valid email",
      "password.required": "Must provide a password",
      "password.min": "Password will have at least 6 characters"
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Login
