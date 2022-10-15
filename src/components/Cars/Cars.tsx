import React, {FC, useEffect, useState} from 'react';
import {carService} from "../../services";
import {ICar} from "../../interfaces";
import Car from "../Car/Car";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hook";
import {carAction} from "../../redux/slices/car.slice";

const Cars: FC = () => {
  const {cars} = useAppSelector(state => state.carReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(carAction.getAll())
  }, [dispatch])

  return (
    <div>
      {cars.map(car => (<Car key={car.id} car={car}/>))}
    </div>
  );
};

export default Cars;