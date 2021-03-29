'use strict'

class AuthController {

    async login({ response }){
        response.json("hello from login")
    }

    async registration({ response }){
        response.json("hello from registration")
    }
}

module.exports = AuthController
