import React from 'react';
import './TodoList.css';

const TodoItem = ({ todoItem: { subject, isCompleted }, onClickDelete, onToggleTodoStatus }: any) => {

    return (
        <div className={`todoItem ${isCompleted ? 'completed' : ''}`}>
            <p onClick={onToggleTodoStatus}>{ subject }</p>
            <span onClick={onClickDelete}>X</span>
        </div>
    );
}

export default TodoItem;
