const initState = {
    list: [
        {id: 1, title: 'Go shopping', checked: false},
        {id: 2, title: 'Buy milk', checked: false}
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

    if (action.type === "UPDATE_TODO") {
        let index = state.list.findIndex(l => l.id === action.id);

        let newList = [...state.list];

        newList[index].checked = !newList[index].checked;

        return {
            ...state,
            list: newList
        }

   }
    return state;
}

export default rootReducer;