'use strict'

const Schema = use('Schema')
class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('categoryName').notNullable()
      table.integer('status').default(1).comment('0 => inactive, 1 => active')
      table.integer('userId').unsigned().notNullable().index().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
