import { useEffect, useState } from 'react';
import { fetchCars } from '../services/api';
import CarCard from 'components/CarCard/CarCard';

const CatalogList = () => {
  const { cars, setCars } = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        setError(error.message);
      }
      fetchAllCars();
      console.log(fetchAllCars());
    };
  }, []);

  return (
    <div>
      <CarCard />
    </div>
  );
};

export default CatalogList;
