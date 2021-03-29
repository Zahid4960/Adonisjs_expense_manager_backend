'use strict'

const Schema = use('Schema')
class UserInfoSchema extends Schema {
  up () {
    this.create('user_infos', (table) => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName')
      table.string('age').notNullable()
      table.date('dateOfBirth')
      table.boolean('gender').notNullable().comment('0 => male, 1 => female')
      table.text('address').notNullable()
      table.string('nid')
      table.string('mobile')

      table.integer('userId').unsigned().notNullable().unique().references("id").inTable("users")

      table.timestamps()
    })
  }

  down () {
    this.drop('user_infos')
  }
}

module.exports = UserInfoSchema
