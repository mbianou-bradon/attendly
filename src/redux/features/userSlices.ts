import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../utils/DataTypes/dataTypes'

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
        role: "student",
        institutionalEmail: ''
    },
    newUser : {
        matriculeNumber: '',
        studentName: '',
        email: '',
        phoneNumber: '',
        faculty: '',
        department: '',
        role: "student",
        password: '',
        confirmPassword: '',
        institutionalEmail: ''
    }
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers : {
        globalAuth : (state, action : PayloadAction<boolean>) =>{
            state.isAuth = action.payload
        },
        createNewUser : (state, action) => {

        },
        currentUser : (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { globalAuth, createNewUser, currentUser } = userSlice.actions
export default userSlice.reducer