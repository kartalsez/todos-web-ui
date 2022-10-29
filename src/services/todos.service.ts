import { TodoItemModel } from '../core/TodoItem.model';
import { SERVER_URL } from '../constants/constants';
import { getServiceOptions, throwError } from '../utils/common-utils';

const API_URL = `${SERVER_URL}/api/todos`;

export async function getTodos() {
  return fetch(API_URL).then((resp) => {
    throwError(resp);
    return resp.json();
  });
}

export async function createTodos(val: string) {
  return fetch(API_URL, getServiceOptions('post', { subject: val })).then(
    (resp) => {
      throwError(resp);
      return resp.json();
    }
  );
}

export async function deleteTodos(id: string) {
  return fetch(API_URL + '/' + id, getServiceOptions('delete')).then((resp) => {
    throwError(resp);
    return resp.json();
  });
}

export async function updateTodos(t: TodoItemModel) {
  return fetch(
    API_URL + '/' + t._id,
    getServiceOptions('put', { isCompleted: !t.isCompleted })
  ).then((resp) => {
    throwError(resp);
    return resp.json();
  });
}
