import { createSlice } from '@reduxjs/toolkit';
import { getTodoAPI, addTodoAPI } from '../../api/todo';

export const todoSlice = createSlice({
	name: 'todoSlice',
	initialState: {
		todoList: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todoList.push(action.payload);
		},
		getTodo: (state, action) => {
			state.todoList = [action.payload];
		},
	},
});

export const getTodoAsync = (data) => async (dispatch, getState) => {
	console.log('getState:', getState());
	const response = await getTodoAPI(data);
	dispatch(getTodo(response));
};
export const addTodoAsync = (data) => async (dispatch) => {
	const response = await addTodoAPI(data);
	dispatch(addTodo(response));
};

export const { addTodo, getTodo } = todoSlice.actions;
export default todoSlice.reducer;
