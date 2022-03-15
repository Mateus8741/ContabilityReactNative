import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Singin() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
        placeholder="Digite seu email..."
        style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
        placeholder="Digite sua senha..."
        style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
        </TouchableOpacity>


      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
    },
    containerHeader: {
      marginTop: 50,
      marginBottom: 20,
      padding: 20,
    },
    message: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "bold",
    },
    containerForm: {
      backgroundColor: "#fff",
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      },
    title: {
      fontSize: 20,
      marginTop: 20,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#38a69d",
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    buttonRegister: {
      marginTop: 20,
      alignSelf: "center",
    },
    registerText: {
      color: "#a1a1a1",
    }
});
