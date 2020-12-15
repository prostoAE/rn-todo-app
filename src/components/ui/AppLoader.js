import React from "react";
import {StyleSheet, View, ActivityIndicator} from "react-native";
import {THEME} from "../../theme";

export const AppLoader = () => (
  <View style={style.center}>
    <ActivityIndicator size='large' color={THEME.MAIN_COLOR}/>
  </View>
);

const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
