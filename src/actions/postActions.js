export const deleteTodoAction = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const addTodoAction = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}