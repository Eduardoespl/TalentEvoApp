// empleadoCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EmpleadoDetailCardProps {
    nombre: string;
    apellido: string;
    posicion: string;
}

const EmpleadoDetailCard: React.FC<EmpleadoDetailCardProps> = ({ nombre, apellido, posicion }) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.nombre}>{nombre} {apellido}</Text>
                <Text style={styles.posicion}>{posicion}</Text>
            </View>
            <View style={styles.btn_container}>
                <TouchableOpacity style={styles.delete}>
                    <Icon name="delete" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.upgrade}>
                    <Icon name="upgrade" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#29282F',
        borderRadius: 10,
        width: 310,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nombre: {
        fontSize: 25,
        color: 'white',
    },
    posicion: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    delete: {
        backgroundColor: '#FF0000',
        padding: 5,
        borderRadius: 50,
        margin: 5,
    },
    upgrade: {
        backgroundColor: '#14E8EB',
        padding: 5,
        borderRadius: 50,
        margin: 5,
    },
    btn_container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default EmpleadoDetailCard;
