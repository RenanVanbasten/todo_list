import React, { useState } from 'react';
import PropTypes from 'prop-types'

import "./styles.css"

const NewTodo = ({ onNewTodo }) => {
    const ENTER_KEY = 13;
    const ESCAPE_KEY = 27;

    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        if (onNewTodo){
           onNewTodo(value)
        erase(); 
        }
    };

    const onKeyDown = (e) => {
        if (e.which === ENTER_KEY) {
            submit();
        } else if (e.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <input
            className="new-todo"
            placeholder="O que temos pra hoje??"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
        />
    );
};


NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}

export default NewTodo;
