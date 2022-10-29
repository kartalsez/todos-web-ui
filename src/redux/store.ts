import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './features/todoList/todoListSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
