'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use("App/Models/User");

class UserSeeder {
  async run () {
    try {
      await User.create({
        email: "germaintanon@gmail.com",
        noms: "Germain TANON",
        mobile: "+2250709286952",
        password: "123456",
      });

    } catch (e){
        console.log(e);
    }
  }
}

module.exports = UserSeeder
