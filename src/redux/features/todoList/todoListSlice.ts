import {createSlice} from '@reduxjs/toolkit'
import {TodoItemModel} from "../../../core/TodoItem.model";
import {
    createTodo,
    fetchTodos,
    isFullFilledAction,
    isPendingAction,
    isRejectedAction,
    removeTodo,
    updateTodo
} from "./functions";

export interface TodolistState {
    todoList: Array<TodoItemModel>,
    loading: boolean,
    error: any
}

const initialState: TodolistState = {
    todoList: [],
    loading: false,
    error: null
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todoList = action.payload || [];
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload);
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todoList.splice(action.payload, 1);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.todoList[action.payload].isCompleted = !state.todoList[action.payload].isCompleted;
            })
            .addMatcher(isPendingAction, (state, action) => {
                state.loading = true
            })
            .addMatcher(isFullFilledAction, (state, action) => {
                state.loading = false
            })
            .addMatcher(isRejectedAction, (state, action: any) => {
                state.loading = false
                state.error = action.error;
            })
    },
})

export default todoListSlice.reducer
