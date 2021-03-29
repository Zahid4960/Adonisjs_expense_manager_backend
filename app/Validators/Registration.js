'use strict'

class Registration {
  get rules () {
    return {
      email: "required|email|unique:users",
      userName: "required|min:6|unique:users",
      password: "required|min:6"
    }
  }

  get messages() {
    return {
      "email.required": "Must provide an email address",
      "email.email": "Email must be a valid email",
      "email.unique": "This email is already taken",
      "userName.required": "Must provide a user name",
      "userName.min": "User name will have at least 6 characters",
      "userName.unique": "This user name is already taken",
      "password.required": "Must provide a password",
      "password.min": "Password will have at least 6 characters"
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Registration
