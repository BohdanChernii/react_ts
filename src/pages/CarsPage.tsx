import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/CarForm/CarForm";
import {Outlet} from "react-router";

const CarsPage:FC = () => {
  return (
    <div>
      <CarForm/>
      <hr/>
      <Outlet/>
      <hr/>
      <Cars/>
    </div>
  );
};

export default CarsPage;