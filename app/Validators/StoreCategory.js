'use strict'

class StoreCategory {
  get rules () {
    return {
      category_name: 'required',
      userId: 'required'
    }
  }

  get validateAll() {
      return true
  }
}

module.exports = StoreCategory
