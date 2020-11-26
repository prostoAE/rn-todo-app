import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {THEME} from "../theme";
import {AppCart} from "../components/ui/AppCart";

export const TodoScreen = ({goBack, todo, onRemove}) => {
    return (
        <View>
            <AppCart style={styles.cart}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Ред.'/>
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
