import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";
import {Outlet} from "react-router";

interface IProps {}

const MainLayout: FC<IProps> = () => {
  return (
    <div>
      <header>
        <h1>Cars</h1>
      </header>
      <Outlet/>
    </div>
  );
};

export default MainLayout;