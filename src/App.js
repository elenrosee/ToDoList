import { Container } from "./App.styled";
import { ToDoForm, ToDoList } from "./components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ToDoForm />
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
