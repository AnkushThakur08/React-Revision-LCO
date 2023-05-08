import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <input type="text" name="addTodo" value={input} placeholder="Enter Todo" onChange={(e) => setInput(e.target.value)} />

      <button onClick={() => dispatch(addTodo(input))}>Save</button>
    </>
  );
};

export default AddTodo;
