import React, {useContext} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {Navbar} from "./components/Navbar";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext);

  // const removeTodo = (id) => {
  //   const todo = todos.find(t => t.id === id);
  //   Alert.alert(
  //     "Удаление элемента",
  //     `Вы уверенны, что хотите удалить "${todo.title}"?`,
  //     [
  //       {
  //         text: "Отмена",
  //         style: "cancel"
  //       },
  //       {
  //         text: "Удалить",
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos(prev => prev.filter(todo => todo.id !== id))
  //         }
  //       }
  //     ],
  //     {cancelable: false}
  //   );
  // };

  return (
    <View>
      <Navbar title={'Todo App'}/>
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORISONTAL,
    paddingVertical: 20
  },
});
