'use strict'

const Schema = use('Schema')
class TargatedExpenseSchema extends Schema {
  up () {
    this.create('targated_expenses', (table) => {
      table.increments()
      table.float('amount').notNullable()
      table.date('fromDate').notNullable().index()
      table.date('todate').notNullable().index()
      table.integer('userId').unsigned().notNullable().index().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
      table.timestamps()
    })
  }

  down () {
    this.drop('targated_expenses')
  }
}

module.exports = TargatedExpenseSchema
