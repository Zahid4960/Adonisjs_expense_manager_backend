'use strict'

const Schema = use('Schema')
class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description')
      table.float('amount').notNullable()
      table.date('expenseDate').notNullable().index()
      table.integer('categoryId').unsigned().notNullable().index().references("id").inTable("categories").onUpdate("CASCADE").onDelete("CASCADE")
      table.integer('userId').unsigned().notNullable().index().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
      table.timestamps()
    })
  }

  down () {
    this.drop('expenses')
  }
}

module.exports = ExpenseSchema
