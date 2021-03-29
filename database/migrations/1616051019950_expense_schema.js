'use strict'

const Schema = use('Schema')
class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description')
      table.float('amount').notNullable()
      table.date('expense_date').notNullable().index()

      table.integer('categoryId').unsigned().notNullable().index().references("id").inTable("categories")
      table.integer('userId').unsigned().notNullable().index().references("id").inTable("users")

      table.timestamps()
    })
  }

  down () {
    this.drop('expenses')
  }
}

module.exports = ExpenseSchema
