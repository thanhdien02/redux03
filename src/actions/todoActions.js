export const addTodo = (content) => {
    return {
        type: "ADD_TODO",
        payload: content,
    };
};

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id,
    };
};
