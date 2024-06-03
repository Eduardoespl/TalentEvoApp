import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BtnAddWorker from "../components/btnAddWorker";
import EmpleadoDetailList from "../components/empleadoDetailList";

function PersonalScreen(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personal Screen</Text>
            <BtnAddWorker />
            <View style={styles.card_container}>
                <EmpleadoDetailList />
            </View>
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
    card_container: {
        width: "80%",
        alignItems: "center",
        marginTop: 20,
        borderTopColor: "white",
        borderTopWidth: 1,
    },
});

export default PersonalScreen;
