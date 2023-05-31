'use strict'

const Parking = use("App/Models/Parking");
const ParkingPlace = use("App/Models/ParkingPlace");
const ParkingReservation = use("App/Models/ParkingReservation");

class ParkingController {

    async index(){
        return await Parking.query().fetch();
    }

    async search({request, response}){

        const { start_date, end_date, etage, parking } = request.only(['start_date', 'end_date', 'etage', 'parking']);

        let query = ParkingPlace.query().select(['parking_places.*', 'parkings.label as parking_label']).whereRaw(
            "(select count(*) from parking_reservations where parking_reservations.place_id = parking_places.id AND (( ? >= start_date AND start_date <= ?) OR ( ? >= end_date AND end_date <= ?))) = 0", 
            [start_date, end_date, start_date, end_date]
        ).join('parkings', 'parkings.id', '=', 'parking_places.parking_id');

        if(etage)
            query = query.where('etage', etage);

        if(parking)
            query = query.where('parking_id', parking);

        const places = await query.fetch();

        return places;
    }

    async status({request, params}){

        const {parkingId} = params;
        const { start_date, end_date, etage } = request.only(['start_date', 'end_date', 'etage',]);

        const parking = await Parking.findOrFail(parkingId);

        let occupedPlaces = await ParkingPlace.query().select(['parking_places.*', 'parkings.label as parking_label']).whereRaw(
            "(select count(*) from parking_reservations where parking_reservations.place_id = parking_places.id AND (( ? >= start_date AND start_date <= ?) OR ( ? >= end_date AND end_date <= ?))) > 0", 
            [start_date, end_date, start_date, end_date]
            ).join('parkings', 'parkings.id', '=', 'parking_places.parking_id').where('parking_id', parkingId).fetch();

        let freePlaces = await ParkingPlace.query().select(['parking_places.*', 'parkings.label as parking_label']).whereRaw(
            "(select count(*) from parking_reservations where parking_reservations.place_id = parking_places.id AND (( ? >= start_date AND start_date <= ?) OR ( ? >= end_date AND end_date <= ?))) = 0", 
            [start_date, end_date, start_date, end_date]
        ).join('parkings', 'parkings.id', '=', 'parking_places.parking_id').where('parking_id', parkingId).fetch();
        
        return {parking, occupedPlaces, freePlaces};
    }

    async makeReservation({request, params, auth}){
        
        const { start_date, end_date, place } = request.only(['start_date', 'end_date', 'place',]);

        return await ParkingReservation.create({
            start_date, end_date, place_id: place, user_id:  (await auth.getUser()).id
        })
    }

    async reservationHistory({request, params, auth}){
        return await ParkingReservation.query()
        .select(['parking_places.*', 'parkings.label as parking_label', 'parking_reservations.*'])
        .join('parking_places', 'parking_places.id', '=', 'parking_reservations.place_id')
        .join('parkings', 'parkings.id', '=', 'parking_places.parking_id')
        .where('parking_reservations.user_id', (await auth.getUser()).id).fetch()
    }

}

module.exports = ParkingController
