import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import React from "react";

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Adınız" />
      <TextInput style={styles.input} placeholder="Soyadınız" />
      <TextInput style={styles.input} placeholder="E-Mail" />
      <TextInput style={styles.input} placeholder="Şifre" />
      <Button style={styles.btn} title="Kayıt Ol" onPress={()=> navigation.navigate('Sign')}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        width:"80%",
        borderWidth:0.5,
        marginTop:8,
        padding:5,
    },

    btn:{
        marginTop:20,
        marginHorizontal:20
    }
});
