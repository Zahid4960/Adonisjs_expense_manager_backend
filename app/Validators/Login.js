'use strict'

class Login {
  get rules () {
    return {
      email: "required",
      password: "required"
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Login
