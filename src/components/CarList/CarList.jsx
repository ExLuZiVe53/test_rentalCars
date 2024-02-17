import CarCard from 'components/CarCard/CarCard';

const CarList = ({ cars }) => {
  const showCars = Array.isArray(cars) && cars.length;

  <ul className="carsList">
    {showCars &&
      cars.map(car => {
        return (
          <CarCard
            id={car.id}
            title={car.title}
            userId={car.userId}
            body={car.body}
            key={car.id}
          />

          //   id,
          //   year,
          //   make,
          //   model,
          //   type,
          //   img,
          //   description,
          //   fuelConsumption,
          //   engineSize,
          //   accessories,
          //   functionalities,
          //   rentalPrice,
          //   rentalCompany,
          //   address,
          //   rentalConditions,
          //   mileage,
        );
      })}
  </ul>;
};
