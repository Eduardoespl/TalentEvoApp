import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NotificationCardProps {
    text: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ text }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#29282F",
        borderRadius: 10,
        width: 350,
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});

export default NotificationCard;