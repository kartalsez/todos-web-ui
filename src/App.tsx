import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className="mainLayout">
      <header>
        <h1>TODO List</h1>
      </header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
      <Loading />
    </div>
  );
}

export default App;
