'use strict'

const User = use("App/Models/User")
const Hash = use("Hash")
class AuthController {

    async login({ auth, request, response }){
        try {
            let data = request.all()
            let password = String(data.password)
            let token = await auth.attempt(data.email, password);
            let user_data = await User.findBy("email", data.email)
            return response.json({ "status": "success", "msg": "Login successful!!!", "data": user_data, "token": token.token })
        } catch (error) {
            return response.json({ "status": "error", "msg": "Exception appear to login!!!", "exception": error.message })
        }
    }

    async registration({ auth, request, response }){
        let data = request.all()
        let password = String(data.password)
        let encryptedPassword = await Hash.make(password)
        let user_data = { 
            email: data.email, 
            userName: data.userName, 
            encryptedPassword: encryptedPassword, 
            plainPassword: password 
        }
        try{
            let user = await User.create(user_data)
            let token = await auth.generate(user)
            return response.json({ "status": "success", "msg": "User created successfully!!!", "data": user, "token": token.token })
        }catch(error){
            console.log(error)
            return response.json({ "status": "error", "msg": "Exception appear failed to create user!!!", "exception": error.message })
        }
    }
}

module.exports = AuthController
