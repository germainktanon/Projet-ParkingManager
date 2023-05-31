'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParkingPlaceSchema extends Schema {
  up () {
    this.create('parking_places', (table) => {
      table.increments()

      table.integer('etage_number');
      table.integer('place');
      table.integer('parking_id');

      table.timestamps()
    })
  }

  down () {
    this.drop('parking_places')
  }
}

module.exports = ParkingPlaceSchema
