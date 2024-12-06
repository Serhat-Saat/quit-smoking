import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

export default function SigninScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Şifre" />
      <View style={styles.btncontainer}>
      <Button style={styles.button} title="Giriş Yap"onPress={()=> navigation.navigate('Current')} />
      <Button style={styles.button} title="Kayıt Ol"onPress={()=> navigation.navigate('Register')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width:"80%",
    padding:5,
    borderWidth: 0.5,
    marginTop:8
  },
  btncontainer:{
    flex:0.05,
    flexDirection:"row",
    marginTop:8,
  },
  button:{
  }
});
