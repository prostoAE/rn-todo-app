import React, {useReducer, useContext} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO} from "../types";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null
  };
  const {changeScreen} = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = title => dispatch({type: ADD_TODO, title});

  const removeTodo = id => {
    const todo = state.todos.find(t => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверенны, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () => {
            changeScreen(null);
            dispatch({type: REMOVE_TODO, id});
          }
        }
      ],
      {cancelable: false}
    );
  };

  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

  const showLoader = () => dispatch({type: SHOW_LOADER});

  const hideLoader = () => dispatch({type: HIDE_LOADER});

  const showError = error => dispatch({type: SHOW_ERROR, error});

  const clearError = () => dispatch({type: CLEAR_ERROR});

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};
