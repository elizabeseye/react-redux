import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync, addTodoAsync } from '../../store/reducers/todoSlice';

const Todo = () => {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoSlice.todoList);
	const [newTodo, setNewTodo] = useState({
		userId: 69,
		id: 69,
		title: '',
		completed: false,
	});

	const getTodo = () => {
		dispatch(getTodoAsync('5'));
	};
	const addNewTodo = () => {
		dispatch(addTodoAsync(newTodo));
	};
	return (
		<>
			<input
				onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
			/>
			<button onClick={addNewTodo}>Add new todo</button>
			{todoList.map((item, idx) => {
				return <p key={idx}>{item.title}</p>;
			})}
			<button onClick={getTodo}>GET TODO</button>
		</>
	);
};
export default Todo;
