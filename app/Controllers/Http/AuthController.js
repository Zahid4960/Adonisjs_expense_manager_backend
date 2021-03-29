'use strict'

const User = use("App/Models/User")
const auth = require("../../../config/auth")
class AuthController {

    async login({ requets, response }){
        response.json("hello from login")
    }

    async registration({ request, response }){
        let data = request.all()
        let email = data.email
        let encryptedPassword = "dfsigushgih"
        let data_array = { 
            email: data.email, 
            userName: data.userName, 
            encryptedPassword: encryptedPassword, 
            plainPassword: data.password 
        }

        // return response.json(data_array)
        try{
            let user = await User.create(data_array)
            console.log(user)
            const token = await auth.generate(user)
            return response.json({ "status": "success", "msg": "User created successfully!!!", "data": user, "token": token })
        }catch(error){
            console.log(error)
            return response.json({ "status": "error", "msg": "Exception appear failed to create user!!!", "exception": error.message })
        }
    }
}

module.exports = AuthController
