'use strict'

class Registration {
  get rules () {
    return {
      email: "required",
      userName: "required",
      password: "required"
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Registration
