'use strict'

// services
const categoryService = use('App/Services/CategoryService')
class CategoryController {

  async index ({ response }) {
    try {
      let categoryData = await categoryService.index()
      return response.json({ "status": "success", "data": categoryData })
    } catch (error) {
      console.log(error)
      return response.json({ "status": "error", "msg": "Exception appear!!!" })
    }
  }

  async store ({ request, response }) {
    try {
      let payload = request.all()
      if(categoryService.store(payload)){
        return response.json({ "status": "success", "msg": "Category saved!!!" })
      }
    } catch (error) {
      return response.json({ "status": "error", "msg": "Exception appear category failed to save!!!" })
    }
  }

  async show ({ params, request, response, view }) {
  }
  
  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
