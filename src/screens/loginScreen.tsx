import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";


function LoginScreen(): React.JSX.Element {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Talent<Text style={styles.azul}>Evo</Text></Text>
      <View style={styles.container}>
        <View style={styles.fields}>
            <Text style={styles.normalText}>Usuario</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.normalText}>Contraseña</Text>
            <TextInput style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.normalText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: 270,
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    fontSize: 20,
  },
  body: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#29282F",
    padding: 20,
    borderRadius: 15,
    margin: 20,
    alignItems: "center",
    height: 472,
    justifyContent: "center"
  },
  normalText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FF824A",
    padding: 10,
    borderRadius: 15,
    width: 211,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "Montserrat",
  },
  azul: {
    color: "#14E8EB"
  },
  fields: {
    marginBottom: 20,
  }
});

export default LoginScreen;