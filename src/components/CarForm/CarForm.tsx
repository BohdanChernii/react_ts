import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks/redux.hook";
import {carAction} from "../../redux/slices/car.slice";

const CarForm: FC = () => {
  const {register, handleSubmit, reset} = useForm<ICar>()
  const dispatch = useAppDispatch()
  const submit: SubmitHandler<ICar> = async (data) => {
    await dispatch(carAction.addCar({car: data}))
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder={'model'} {...register('model')}/>
      <input type="text" placeholder={'price'} {...register('price')}/>
      <input type="text" placeholder={'year'} {...register("year")}/>
      <button>Save</button>
    </form>
  );
};

export default CarForm;