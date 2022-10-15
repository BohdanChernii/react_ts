import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";


interface IState {
  cars: ICar[]
  car: null | ICar,
  loading: boolean
}

const initialState: IState = {
  cars: [],
  car: null,
  loading: false
}

const getAll = createAsyncThunk<ICar[], void>(
  'carSlice/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await carService.getAll()
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.response?.data)
    }
  }
)

const addCar = createAsyncThunk<ICar, { car: ICar }>(
  'carSlice/addCar',
  async ({car}, {rejectWithValue}) => {
    try {
      const {data} = await carService.addCar(car)
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.response?.data)
    }
  }
)

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.cars = action.payload
    }).addCase(addCar.fulfilled, (state, action) => {
      state.cars.push(action.payload)
    })
})

const {reducer: carReducer} = carSlice
const carAction = {
  getAll,
  addCar
}
export {carSlice, carReducer,carAction}