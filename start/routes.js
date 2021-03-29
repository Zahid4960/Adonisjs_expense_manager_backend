'use strict'

const Registration = require("../app/Validators/Registration");

const Route = use('Route')

Route.get("/", ({ response }) => {
    response.json("Welcome to the expense manager powered by Adonisjs!!!");
})

Route.post("login", "AuthController.login").validator("Login")
Route.post("registration", "AuthController.registration").validator("Registration")

Route.group(() => {
    Route.resource('categories', 'CategoryController').apiOnly().validator(new Map([
        [['categories.store'], ['StoreCategory']]
    ]))
}).middleware("auth").prefix('api/v1')

