const initState = {
  todolist: []
};

const addTodoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todolist: [...state.todolist, action.payload.todoItem]
      };
    }
    case "REMOVE_TODO": {
      const filterList = state.todolist.filter((item, i) => {
        return i !== action.payload.e;
      });
      return {
        todolist: filterList
      };
    }
    default:
      return state;
  }
};

export default addTodoReducer;
