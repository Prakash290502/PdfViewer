import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName: '',
    MiddleName: '', 
    LastName: '',
    Age: '',
    Sex: '',
    Address1: '',
    Adderss2: '',
    City: '',
    State: '',
    Postal: '', 
    PhoneNumber: '',
    email: '',
    Describe: '',
    date:'',
    pdf:''
}

export const FormSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        storeForm(state,action){
            state.formData=action.payload
        }
    }



})

export const {storeForm} =FormSlice.actions

export default FormSlice.reducer;