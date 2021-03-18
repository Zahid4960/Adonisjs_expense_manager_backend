'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description')
      table.float('amount').notNullable()
      table.integer('categoryId').notNullable()
      table.integer('userId').notNullable()
      table.date('expense_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('expenses')
  }
}

module.exports = ExpenseSchema
