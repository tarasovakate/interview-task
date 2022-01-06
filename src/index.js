import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Store from "./context";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, CssBaseline, Container } from "@material-ui/core";
import CompleteList from "./components/CompleteList";

const App = () => {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  const theme = createMuiTheme({
    palette: {
      type: state.myTheme
    }
  });

  return (
    <Container>
      <Store.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <TodoForm />
          <TodoList />
          <CompleteList/>
        </ThemeProvider>
      </Store.Provider>
    </Container>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
