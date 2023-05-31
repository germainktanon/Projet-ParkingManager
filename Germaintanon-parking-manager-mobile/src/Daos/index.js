import AuthDAO from './AuthDAO';
import ParkingsDAO from './ParkingsDAO';

const Daos = {
  Auth: new AuthDAO(),
  Parkings: new ParkingsDAO(),
};

export default Daos;
