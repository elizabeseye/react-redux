import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		userName: '',
	},
	reducers: {
		getUserName: (state, action) => {
			state.userName = action.payload;
		},
	},
});

export const { getUserName } = userSlice.actions;

export default userSlice.reducer;
