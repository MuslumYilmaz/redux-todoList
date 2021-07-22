const initState = {
    list: [
        {id: 1, title: 'Go shopping'},
        {id: 2, title: 'Buy milk'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_TODO") {
        let newList = state.list.filter(l => l.id !== action.id);
        return {
            ...state,
            list: newList
        }
    }

    if (action.type === "ADD_TODO") {
         let newList = state.list.concat(action.todo);
         return {
             ...state,
             list: newList
         }

    }
    return state;
}

export default rootReducer;