export const PLACE_OCCUPE = 'occupe';
export const PLACE_LIBRE = 'libre';
export const PLACE_CHOISIE = 'choisie';

export function getParkingPlaceMap(placesOccupes = [], myPlace, placeNumber) {
  const places = [];

  for (let i = 1; i <= placeNumber; i++) {
    if (placesOccupes.includes(i)) {
      places.push(PLACE_OCCUPE);
    } else if (myPlace == i) {
      places.push(PLACE_CHOISIE);
    } else places.push(PLACE_LIBRE);
  }

  return places;
}

export function etageToString(etageNumber){
  if (etageNumber == 0) return 'Rez-de-chaussée';
  else if (etageNumber == 1) return '1er étage';

  return `${etageNumber}e étage`;
}
