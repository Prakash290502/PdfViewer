import {configureStore} from '@reduxjs/toolkit'
import FormReducer from '../features/FormSlice'

export const Store=configureStore({
    reducer:{
        form: FormReducer,
    }
})

export default Store;