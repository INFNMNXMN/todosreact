import "./App.css";
import { requestTodos, Todos } from "./Todos";
import { store } from "./store";
import { Provider } from "react-redux";

store.dispatch(requestTodos());

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
