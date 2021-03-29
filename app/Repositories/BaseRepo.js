'use strict'

class BaseRepo{

    async getAll(model){
        return await model.all()
    }

    async saveData(model, payload){
        return await model.create(payload)
    }
}

module.exports = BaseRepo