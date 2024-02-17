import axios from 'axios';

export const fetchCars = async () => {
  const { data } = await axios.get(
    'https://65cd17cedd519126b8401aef.mockapi.io/cars'
  );
  return data;
};
