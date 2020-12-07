import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesome, AntDesign} from "@expo/vector-icons";

import {THEME} from "../theme";
import {AppCart} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
  const [modal, setModal] = useState(false);

  const saveHandler = title => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCansel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCart style={styles.cart}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name={'edit'} size={20}/>
        </AppButton>
      </AppCart>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
            <AntDesign name='back' size={20} color='#fff'/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
            <FontAwesome name='remove' size={20} color='#fff'/>
          </AppButton>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cart: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
});
