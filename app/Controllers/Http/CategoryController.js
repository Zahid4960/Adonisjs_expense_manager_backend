'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


class CategoryController {

  async index ({ request, response, view }) {
    return response.json("Hello Zahid")
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }
  
  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
