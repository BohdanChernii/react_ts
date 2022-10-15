import React, {FC, ReactNode} from 'react';
import {ICar} from "../../interfaces";
import {useNavigate} from "react-router";

interface IProps {
  car: ICar,
  children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {
  const {id, price, model, year} = car

  const navigate = useNavigate()
  return (
    <div>
      <p>ID: {id}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
      <p>Price: {price}</p>
      <button onClick={() => navigate(`${id}`, {state: car})}>Choose Car</button>
    </div>
  );

};

export default Car;