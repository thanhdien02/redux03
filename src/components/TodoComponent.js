import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoActions";

const TodoComponent = () => {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.content}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoComponent;
