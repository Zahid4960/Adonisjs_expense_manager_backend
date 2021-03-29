'use strict'

const Schema = use('Schema')
class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('category_name').notNullable()
      table.integer('status').default(1).comment('0 => inactive, 1 => active')

      table.integer('userId').unsigned().notNullable().index().references("id").inTable("users")

      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
