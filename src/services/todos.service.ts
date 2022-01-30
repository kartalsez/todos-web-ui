import {TodoItemModel} from "../core/TodoItem.model";
import {SERVER_URL} from "../constants/constants";

const API_URL=`${SERVER_URL}/api/todos`;

export async function getTodos() {
    return fetch(API_URL, {mode:'cors'})
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json()
        })
}

export async function createTodos(val: string) {
    return fetch(API_URL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({subject: val})
    })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json()
        })
}

export async function deleteTodos(id: string) {
    return fetch(API_URL + '/' + id, {
        method: 'delete',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json()
        })
}

export async function updateTodos(t: TodoItemModel) {
    return fetch(API_URL + '/' + t._id, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({isCompleted: !t.isCompleted})
    })
        .then(resp => {
            if (!resp.ok){
                if (resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json()
        })
}
