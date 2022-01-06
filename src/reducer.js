const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload)
      };
    case "DELETE-COMPLETE":
      return {
        ...state,
        completeTodos: state.completeTodos.filter(t => t !== action.payload)
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload),
        completeTodos: [...state.completeTodos,state.todos.filter(t => t === action.payload)],
      };
    case "THEME":
      return {
        ...state,
        myTheme: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
