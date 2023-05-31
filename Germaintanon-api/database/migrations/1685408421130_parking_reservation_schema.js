'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParkingReservationSchema extends Schema {
  up () {
    this.create('parking_reservations', (table) => {
      table.increments()
      table.integer('place_id').unsigned()
      table.datetime('start_date')
      table.datetime('end_date')
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('parking_reservations')
  }
}

module.exports = ParkingReservationSchema
