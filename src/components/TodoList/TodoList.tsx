import React, { useEffect } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TodoItemModel } from '../../core/TodoItem.model';
import {
  fetchTodos,
  removeTodo,
  updateTodo,
} from '../../redux/features/todoList/functions';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todoList) || [];

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todoItems = todoList.map((todoItem: TodoItemModel, index: number) => (
    <TodoItem
      key={index}
      todoItem={todoItem}
      onClickDelete={() => dispatch(removeTodo(todoItem._id as string))}
      onToggleTodoStatus={() => dispatch(updateTodo(todoItem._id as string))}
    />
  ));

  return <section className="todoList">{todoItems}</section>;
};

export default TodoList;
