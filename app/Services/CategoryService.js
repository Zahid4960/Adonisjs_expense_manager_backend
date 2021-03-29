'use strict'

//models
const category = use('App/Models/Category')

// repositories
const categoryRepo = use('App/Repositories/CategoryRepo')

class CategoryService {

    async index(){
        return await categoryRepo.getAll(category)
    }

    async store(payload){
        return await categoryRepo.saveData(category, payload)
    }
}

module.exports = new CategoryService