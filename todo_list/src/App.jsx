import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
    const [todos, setTodos] = useState([]);

    const onNewTodo = (value) => {
        return setTodos([
            ...todos,
            {
                id: new Date().getTime(),
                title: value,
                checked: false,
            },
        ]);
    };

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    const onDelete = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <section className="container" id="app">
            <header>
                <h1 className="title">todo</h1>
            </header>

            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            </section>
            <section>
                <Footer />
            </section>
        </section>
    );
};

export default App;
