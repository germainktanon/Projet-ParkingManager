'use strict'

/*
|--------------------------------------------------------------------------
| ParkingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Parking = use("App/Models/Parking");
const ParkingPlace = use("App/Models/ParkingPlace");


class ParkingSeeder {
  async run () {

    const parkings = [
      'Plateau, Rue du commerce - P1',
      'Plateau, Rue du commerce - P2',
      'Plateau, Rue du commerce - P3',
      'Plateau, Mosqué - P1',
      'Plateau, Mosqué - P2',
      'Plateau, Mosqué Score - P1',
      'Plateau, Mosqué Score - P2',
      'Plateau, Mosqué Score - P2',
      'Plateau, Cité Administrative - P1',
      'Plateau, Cité Administrative - P2',
      'Cocody, Cité  des Arts - P1',
      'Cocody, Cité  des Arts - P2',
      'Cocody, Cité  des Arts - P3',
      'Cocody, Cité  des Arts - P3',
      'Cocody, Angré 9e Tranche - P1',
      'Cocody, Angré 9e Tranche - P2',
      'Cocody, Angré 9e Tranche - P3',
      'Cocody, Angré 7e Tranche - P1',
      'Cocody, Angré 7e Tranche - P2',
      'Cocody, Angré 7e Tranche - P3',
    ];

    try {

      for(let label of parkings) {
        const parking = await Parking.create({
          label,
          etageNumber: 20,
        });

        for(let i=0; i<4;i++){
          for(let y=1; y<=20;y++){
              await ParkingPlace.create({
                place: y,
                etage_number: i,
                parking_id: parking.id
              })
          }
        }

    }
    } catch (e) {
      console.log(e.message)
    }


  }
}

module.exports = ParkingSeeder
