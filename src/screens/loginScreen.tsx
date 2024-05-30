import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { loginWithEmailPassword } from '../services/authService';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserScreen'>;

function LoginScreen(): React.JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = async () => {
        try {
            const user = await loginWithEmailPassword(email, password);
            if (user) {
                navigation.navigate('UserScreen');
            }
        } catch (error) {
            Alert.alert("Login failed", error.message);
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Talent<Text style={styles.azul}>Evo</Text></Text>
            <View style={styles.container}>
                <View style={styles.fields}>
                    <Text style={styles.normalText}>Usuario</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.normalText}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
