'use strict'

//models
const category = use('App/Models/Category')

// repositories
const baseRepo = use('App/Repositories/BaseRepo')

class CategoryService {

    async index(){
        return await baseRepo.getAll(category)
    }

    async store(payload){
        return await baseRepo.saveData(category, payload)
    }
}

module.exports = new CategoryService