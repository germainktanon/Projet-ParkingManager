'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
|
*/
Route.group(() => {
  /*
  |--------------------------------------------------------------------------
  | API - Authentication
  |--------------------------------------------------------------------------
  */
  Route.post('/auth/login', 'Api/AuthController.signIn');
  Route.post('/auth/register', 'Api/AuthController.register');
  Route.post('/auth/token/refresh', 'Api/AuthController.refreshToken');
  Route.post('/auth/logout', 'Api/AuthController.logout');

  Route.get('/parkings', 'Api/ParkingController.index');
  Route.get('/parkings/status/:parkingId', 'Api/ParkingController.status');
  Route.post('/parkings/search', 'Api/ParkingController.search');
  Route.post('/reservations', 'Api/ParkingController.makeReservation');
  Route.get('/reservations-history', 'Api/ParkingController.reservationHistory');

  /*
  |--------------------------------------------------------------------------
  | API - User
  |--------------------------------------------------------------------------
  */
  Route.get('/auth/users/me', 'Api/UserController.getUser');
}).prefix('api/');
