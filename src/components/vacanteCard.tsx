import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VacanteCardProps {
    titulo: string;
    skills: string;
}

const VacanteCard: React.FC<VacanteCardProps> = ({ titulo, skills }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{titulo}</Text>
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

export default VacanteCard;
