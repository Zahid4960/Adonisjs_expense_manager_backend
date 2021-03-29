'use strict'

const Schema = use('Schema')
class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email').notNullable().unique()
      table.string('userName').notNullable()
      table.string('encryptedPassword').notNullable()
      table.string('plainPassword').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
