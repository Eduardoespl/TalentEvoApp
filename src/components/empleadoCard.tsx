// empleadoCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmpleadoCardProps {
    nombre: string;
    apellido: string;
    posicion: string;
}

const EmpleadoCard: React.FC<EmpleadoCardProps> = ({ nombre, apellido }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{nombre} {apellido}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 250,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
});

export default EmpleadoCard;
