import {PendingAction} from "@reduxjs/toolkit/dist/query/core/buildThunks";
import {AnyAction, createAsyncThunk} from "@reduxjs/toolkit";
import {createTodos, deleteTodos, getTodos, updateTodos} from "../../../services/todos.service";

export function isPendingAction(action: AnyAction): action is PendingAction<any, any> {
    return action.type.endsWith('/pending')
}

export function isFullFilledAction(action: AnyAction): action is PendingAction<any, any> {
    return action.type.endsWith('/fulfilled')
}

export function isRejectedAction(action: AnyAction): action is PendingAction<any, any> {
    return action.type.endsWith('/rejected')
}

export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async (firstParam, { getState, requestId }) => {
        const response = await getTodos()

        return response
    }
)

export const createTodo = createAsyncThunk(
    "todos/createTodo",
    async (value: string, thunkApi) => {
        const response = await createTodos(value)

        return response
    }
)

export const removeTodo = createAsyncThunk(
    "todos/removeTodo",
    async (index: number, { getState, requestId }) => {
        const { todoList } = (getState() as any).todoList;
        await deleteTodos(todoList[index]._id)

        return index
    }
)

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (index: number, { getState, requestId }) => {
        const { todoList } = (getState() as any).todoList;
        await updateTodos(todoList[index])

        return index
    }
)
