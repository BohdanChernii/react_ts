import React, {FC} from 'react';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import {Navigate, Route, Routes} from "react-router";
import CarsPage from "./pages/CarsPage";
import CarDetailsPage from "./pages/CarDetailsPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index  element={<Navigate to={'cars'}/>}/>
          <Route path={'cars'} element={<CarsPage/>}>
            <Route path={':id'} element={<CarDetailsPage/>}/>
          </Route>
        </Route>
      </Routes>
      <MainLayout/>
    </div>
  );
}

export default App;
