import { createStore, combineReducers, applyMiddleware } from "redux";
import { reduceTodos, todosMiddleware } from "./Todos";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(reducer, applyMiddleware(todosMiddleware));
