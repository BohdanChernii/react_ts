import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import {ICar} from "../interfaces";
import {useAppLocations} from "../hooks/router-hook";
import {carService} from "../services";

const CarDetailsPage: FC = () => {
  const {id} = useParams<{ id: string }>()
  const {state} = useAppLocations<ICar>()
  const [car, setCar] = useState<ICar | null>(null)

  useEffect(() => {
    if (state) {
      setCar(state)
    } else {
      carService.getById(+id!).then(({data})=>setCar(data))
    }
  }, [id,state])

  return (
    <div>
      {car&&(
        <div>
          <p>ID: {id}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Price: {car.price}</p>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;