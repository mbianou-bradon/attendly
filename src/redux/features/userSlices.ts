import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../utils/DataTypes/dataTypes'

interface UserType {
    isAuth : boolean,
    currentUser : User,
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
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers : {
        globalAuth : (state, action : PayloadAction<boolean>) =>{
            state.isAuth = action.payload
        },
        currentUser : (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { globalAuth, currentUser } = userSlice.actions
export default userSlice.reducer