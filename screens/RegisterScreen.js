import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import apiRoute from "../api/apiRoute";
import apiCall from "../api/apiCall";
import { post } from "../api/apiCall";
import { get } from "../api/apiCall";

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.password
    ) {
      Alert.alert("Hata", "Tüm alanları doldurduğunuzdan emin olun.");
      return;
    }

    try {
      const data = await post(apiRoute.register, {
        Name: formData.name,
        Surname: formData.surname,
        Email: formData.email,
        Password: formData.password,
      });

      if (data.success) {
        Alert.alert("Başarılı", "Kayıt başarılı!");
        navigation.navigate("Login"); // Kayıt işlemi başarıyla tamamlanınca başka bir sayfaya yönlendirme
      } else {
        Alert.alert("Hata", "Kayıt sırasında bir sorun oluştu.");
      }
    } catch (error) {
      console.error("Kayıt işlemi sırasında hata oluştu:", error);
      Alert.alert("Hata", "Kayıt işlemi sırasında bir sorun oluştu.");
    }
  };

  // const handleSubmit = () => {
  //   var data = post(apiRoute.register, {
  //     Name: formData.name,
  //     Surname: formData.surname,
  //     Email: formData.email,
  //     Password: formData.password,
  //   });
  //   console.log(JSON.stringify(data));
  // console.log(apiRoute.API_URL)
  // fetch(apiRoute.API_URL, {
  //   method: "GET",
  //   headers: {
  //     Accept: "text/plain",
  //   },
  // }) // API URL'i
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Ağ hatası: " + response.status);
  //     }
  //     return response.json(); // JSON formatında yanıtı çöz
  //   })
  //   .then((data) => {
  //     console.log(data); // Çözümlenmiş veri
  //   })
  //   .catch((error) => {
  //     console.error("Hata:", error); // Hata varsa yakala
  //   });

  // try {
  //   // API'ye veri gönderimi
  //   const response = await axios.post(" ", formData);
  //   console.log("API Yanıtı:", response.data);

  //   // Başarılı mesajı göster
  //   //Alert.alert("Kayıt Başarılı", "Bilgileriniz başarıyla kaydedildi!");

  //   // Başka sayfaya yönlendirme
  //   //navigation.navigate("Sign"); // "HomeScreen" yerine hedef sayfanın adını yazın
  // } catch (error) {
  //   console.error("API Hatası:", error);
  //   Alert.alert("Hata", "Kayıt işlemi sırasında bir sorun oluştu.");
  // }
  //  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={formData.name} // State'i TextInput'a bağlama
        onChangeText={(value) => handleInputChange("name", value)}
        placeholder="ADINIZ"
      />
      <TextInput
        style={styles.input}
        value={formData.surname} // State'i TextInput'a bağlama
        onChangeText={(value) => handleInputChange("surname", value)}
        placeholder="SOYADINIZ"
      />
      <TextInput
        style={styles.input}
        value={formData.email} // State'i TextInput'a bağlama
        onChangeText={(value) => handleInputChange("email", value)}
        placeholder="EMAİL"
      />
      <TextInput
        style={styles.input}
        value={formData.password} // State'i TextInput'a bağlama
        onChangeText={(value) => handleInputChange("password", value)}
        placeholder="ŞİFRE"
      />
      <View style={styles.btncontainer}>
        <Button title="Kayıt Ol" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginTop: 8,
    borderWidth: 0.5,
    padding: 8,
  },
  btncontainer: {},

  btn: {
    color: "red",
  },
});
