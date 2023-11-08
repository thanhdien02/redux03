import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import TodoComponent from "./components/TodoComponent";
import store from "./store";
function App() {
    return (
        <Provider store={store}>
            <TodoComponent />
        </Provider>
    );
}

export default App;
