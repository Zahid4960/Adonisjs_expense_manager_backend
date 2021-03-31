'use strict'


class Authentication {

  async handle ({ auth, request, response }, next) {
    try {
      await auth.check()
    } catch (error) {
      return response.json({ "status": "error", "msg": "Exception appear at the time of authenticating the API!!!", "exception": error.message })
    }
    await next()
  }
}

module.exports = Authentication
