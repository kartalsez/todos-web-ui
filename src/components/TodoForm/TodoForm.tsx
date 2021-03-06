import React, {useState} from 'react';
import './TodoForm.css';
import {useDispatch} from 'react-redux';
import {createTodo} from '../../redux/features/todoList/functions';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(createTodo(inputValue));
        setInputValue('');
    }

    return (
        <section className='addTodo' >
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleSubmit}> Add Todo </button>
        </section>
    );
}

export default TodoForm;
