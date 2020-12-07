import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {THEME} from "../theme";
import {AppCart} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";

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
