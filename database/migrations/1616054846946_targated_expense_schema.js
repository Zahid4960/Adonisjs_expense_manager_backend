'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TargatedExpenseSchema extends Schema {
  up () {
    this.create('targated_expenses', (table) => {
      table.increments()
      table.float('amount').notNullable()
      table.integer('userId').notNullable()
      table.date('fromDate').notNullable()
      table.date('todate').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('targated_expenses')
  }
}

module.exports = TargatedExpenseSchema
