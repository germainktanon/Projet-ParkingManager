export const ROOT_URL = 'symbian.stvffmn.com:30000';
export const BASE_URL = `http://${ROOT_URL}/api`;

export const PAYMENT = `${ROOT_URL}/mobile-checkout`;

export const REGISTER = `${BASE_URL}/auth/register`;
export const LOGIN = `${BASE_URL}/auth/login`;
export const ME = `${BASE_URL}/auth/users/me`;


export const MAKE_PLACE_RESERVATION = `${BASE_URL}/reservations`;
export const RESERVATIONS_HISTORIES = `${BASE_URL}/reservations-history`;

export const SEARCH_PARKING_PLACE = `${BASE_URL}/parkings/search`;
export const PARKING_INDEX = `${BASE_URL}/parkings`;
export const PARKING_STATUS = `${BASE_URL}/parkings/status`;

export const GET_FORMULES = `${BASE_URL}/formule-plans`;

export const UPDATE_PROFIL = `${BASE_URL}/user`;
export const UPDATE_PHOTO = `${BASE_URL}/user/photo`;
export const UPDATE_PASSWORD = `${BASE_URL}/user/password/update`;
export const USER_STORE_ADDRESS = `${BASE_URL}/user/address`;
export const USER_DELETE_ADDRESS = `${BASE_URL}/user/address`;
export const USER_GET_ADDRESSES = `${BASE_URL}/user/addresses`;

export const PRECREATE_COMMANDE = `${BASE_URL}/commande`;
export const GET_COMMANDES = `${BASE_URL}/commandes`;

export const PRODUCTS = `${BASE_URL}/products`;

export const POST_SUBSCRIPTION_TO_FORMULE = `${BASE_URL}/users/formules/subscribe`;
export const GET_ACTIVE_ABONNEMENT = `${BASE_URL}/users/subscriptions/active-abonnement`;

export const POST_DEMANDE_INTERVENTION = `${BASE_URL}/demande-intervention`;
export const GET_DEMANDES_INTERVENTION = `${BASE_URL}/demandes-interventions`;
