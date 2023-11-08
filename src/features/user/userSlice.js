import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	user: { username: "ravi" },
	theme: "dracula",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log("login");
		},
		logoutUser: (state) => {
			console.log("logout");
		},
		toggleTheme: (state, action) => {
			console.log("toggle theme");
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;