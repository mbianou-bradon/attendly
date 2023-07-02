import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../utils/dataTypes'

interface UserType {
    isAuth : boolean,
    currentUser : User,
    newUser : User
}


const initialState : UserType = {
    isAuth : false,
    currentUser : {
        matriculeNumber: '',
        studentName: '',
        email: '',
        phoneNumber: '',
        faculty: '',
        department: '',
        password: '',
        confirmPassword: '',
        institutionalEmail: ''
    },
    newUser : {
        matriculeNumber: '',
        studentName: '',
        email: '',
        phoneNumber: '',
        faculty: '',
        department: '',
        password: '',
        confirmPassword: '',
        institutionalEmail: ''
    }
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers : {
        globalAuth : (state, actiion : PayloadAction<boolean>) =>{
            state.isAuth = actiion.payload
        },
        createNewUser : (state, action) => {

        },
        currentUser : (state, action) => {

        }
    }
})

export const { globalAuth, createNewUser, currentUser } = userSlice.actions
export default userSlice.reducer