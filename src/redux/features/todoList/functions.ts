import { PendingAction } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from '../../../services/todos.service';
import { TodoItemModel } from '../../../core/TodoItem.model';

export function isPendingAction(
  action: AnyAction
): action is PendingAction<any, any> {
  return action.type.endsWith('/pending');
}

export function isFullFilledAction(
  action: AnyAction
): action is PendingAction<any, any> {
  return action.type.endsWith('/fulfilled');
}

export function isRejectedAction(
  action: AnyAction
): action is PendingAction<any, any> {
  return action.type.endsWith('/rejected');
}

export const fetchTodos = createAsyncThunk(
  'fetchTodos',
  async (firstParam, { getState, requestId }) => {
    const response = await getTodos();

    return response;
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (value: string, thunkApi) => {
    const response = await createTodos(value);

    return response;
  }
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async (id: string, { getState, requestId }) => {
    try {
      await deleteTodos(id);
      const { todoList } = (getState() as any).todoList;

      return todoList.findIndex((item: TodoItemModel) => item._id === id);
    } catch (e) {
      alert(e);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (id: string, { getState, requestId }) => {
    try {
      const { todoList } = (getState() as any).todoList;
      const index = todoList.findIndex(
        (item: TodoItemModel) => item._id === id
      );
      await updateTodos(todoList[index]);

      return index;
    } catch (e) {
      alert(e);
    }
  }
);
