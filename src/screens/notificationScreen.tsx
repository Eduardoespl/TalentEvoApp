import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NotificationCard from "../components/notificationCard";

function NotificationScreen(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notification Screen</Text>
            <NotificationCard text="Stacy Adams match the perfil  for the Angular developer vacancie"/>
            <NotificationCard text="This month we reached 25 courses completed"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#010104",
        height: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 20,
    },
});

export default NotificationScreen;