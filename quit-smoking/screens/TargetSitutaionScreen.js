import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function TargetSitutaionScreen({navigation}) {
  return (
    <View>
      <Text>Hedeflenilen Sigara Adedi</Text>
      <Text>Bırakma Motivasyonunuz</Text>
      <Button
        title="Bırakacağıma Yemin Ediyorum"
        onPress={() => {
          navigation.navigate("Main");
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})