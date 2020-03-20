const initState = {
  todolist: []
};

const addTodoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const list = state.todolist.map(item => item);
      return {
        todolist: [...list, action.payload.todoItem]
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
