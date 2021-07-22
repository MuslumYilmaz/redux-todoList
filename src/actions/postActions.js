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

export const updateTodoAction = (id) => {
    return {
        type: 'UPDATE_TODO',
        id
    }
}