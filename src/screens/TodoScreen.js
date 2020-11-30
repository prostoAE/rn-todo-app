import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {THEME} from "../theme";
import {AppCart} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove}) => {
    const [modal, setModal] = useState(false);

    return (
        <View>
            <EditModal visible={modal} onCansel={() => setModal(false)}/>

            <AppCart style={styles.cart}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Ред.' onPress={() => setModal(true)}/>
            </AppCart>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="Назад"
                        onPress={goBack}
                        color={THEME.GREY_COLOR}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Удалить"
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}
                    />
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
