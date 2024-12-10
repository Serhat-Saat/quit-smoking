import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CurrentSituationScreen({ navigation }) {
  return (
    <View>
      <Text>Günde İçilen Sigara Sayısı</Text>
      <Text>Sigara Paket Fiyatı</Text>
      <Button
        title="Başla"
        onPress={() => {
          navigation.navigate("Target");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
