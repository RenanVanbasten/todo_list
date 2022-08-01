import React from 'react';
import PropTypes from 'prop-types';

import "./styles.css"
import { MdDelete } from 'react-icons/md';

const TodoList = ({ todos, onToggle, onDelete }) => (
    <ul className="todo-list">
        {todos.map((todo) => (
            <li key={todo.id}>
                <span
                    onClick={() => onToggle && onToggle(todo)}
                    onKeyPress={() => onToggle && onToggle(todo)}
                    role="button"
                    tabIndex={0}
                    className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                >
                    {todo.title}
                </span>

                <button
                    className="remove"
                    type="button"
                    onClick={() => onDelete && onDelete(todo)}
                >
                    <MdDelete size={28} />
                </button>
                
            </li>
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired
        })
    ).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;
