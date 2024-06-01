// EmployeeForm.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

type CoursePlaylistScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VacanteForm'|'Main'
>;

const VacanteForm = () => {
    const navigation = useNavigation<CoursePlaylistScreenNavigationProp>();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescription] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = async () => {
        if (titulo.trim() === '' || descripcion.trim() === '' || skills.trim() === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'vacantes'), {
                titulo,
                descripcion,
                skills,
            });
            Alert.alert('Éxito', 'Vacante añadida con ID: ' + docRef.id);
            setTitulo('');
            setDescription('');
            setSkills('');
            navigation.navigate('Main'); 
        } catch (error) {
            console.error('Error añadiendo el documento: ', error);
            Alert.alert('Error', 'Hubo un problema al añadir la vacante');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center", paddingVertical: 20 }}>Añadir Vacante</Text>
                <TouchableOpacity
                    style={{ position: "absolute", top: 20, left: 20 }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Titulo</Text>
            <TextInput
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
            />
            <Text style={styles.text}>Descripción</Text>
            <TextInput
                style={styles.input}
                value={descripcion}
                onChangeText={setDescription}
            />
            <Text style={styles.text}>Skills</Text>
            <TextInput
                style={styles.input}
                value={skills}
                onChangeText={setSkills}
            />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Añadir Vacante</Text>
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

export default VacanteForm;
