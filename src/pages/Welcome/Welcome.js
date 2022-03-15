import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Logo from "../../../assets/images/logo.png";

export default function Welcome() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="bounceIn"
          source={Logo}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={250}
        animation="bounceInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça login para começar</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Signin")}
        style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38A69D",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#38A69D",
    marginTop: 12,
    marginBottom: 12,
  },
  text: {
    color: "#A1A1A1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38A69D",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: "40%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
