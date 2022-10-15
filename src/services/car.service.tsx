import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {ICar} from "../interfaces";

export const carService = {
  getAll: (): AxiosRes<ICar[]> => axiosService.get(urls.cars),
  getById: (id: number): AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
  addCar: (car: ICar): AxiosRes<ICar> => axiosService.post(urls.cars, car)
}