// EmployeeForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

type CoursePlaylistScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'EmployeeForm'|'Main'
>;

const EmployeeForm = () => {
    const navigation = useNavigation<CoursePlaylistScreenNavigationProp>();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [posicion, setPosicion] = useState('');

    const handleSubmit = async () => {
        if (nombre.trim() === '' || apellido.trim() === '' || posicion.trim() === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'empleados'), {
                nombre,
                apellido,
                posicion,
            });
            Alert.alert('Éxito', 'Empleado añadido con ID: ' + docRef.id);
            setNombre('');
            setApellido('');
            setPosicion('');
            navigation.navigate('Main');
        } catch (error) {
            console.error('Error añadiendo el documento: ', error);
            Alert.alert('Error', 'Hubo un problema al añadir el empleado');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center", paddingVertical: 20 }}>Añadir Empleado</Text>
                <TouchableOpacity
                    style={{ position: "absolute", top: 20, left: 20 }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <Text style={styles.text}>Apellido</Text>
            <TextInput
                style={styles.input}
                value={apellido}
                onChangeText={setApellido}
            />
            <Text style={styles.text}>Posición</Text>
            <TextInput
                style={styles.input}
                value={posicion}
                onChangeText={setPosicion}
            />
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={{ color: 'black', textAlign: 'center', fontSize:20, fontWeight:'bold' }}>Añadir Empleado</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#010104',
        height: '100%',
    },
    input: {
        height: 65,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#29282F',
        borderRadius: 10,
        fontSize: 25,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#14E8EB',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        marginTop: 40,
        height: 50,
        justifyContent: 'center',

    }
});

export default EmployeeForm;
