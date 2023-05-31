'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParkingSchema extends Schema {
  up () {
    this.create('parkings', (table) => {
      table.increments()
      table.string('label');
      table.integer('etageNumber');
      table.timestamps()
    })
  }

  down () {
    this.drop('parkings')
  }
}

module.exports = ParkingSchema
