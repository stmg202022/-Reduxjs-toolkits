import{ createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: "0",
        name: "Samson Tamang",

    },
    {
        id: "1",
        name: "Sagar",
    },
    {
        id: "2",
        name: "manish",
    }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;