import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
  const addTodobtn = screen.getByTestId('addTodo');
  const todoInput = screen.getByTestId('todoInput');

  fireEvent.click(addTodobtn);
  expect(todoInput).toHaveTextContent('');
});
