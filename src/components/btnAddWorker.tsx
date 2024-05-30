import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function BtnAddWorker(): React.JSX.Element {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>Add</Text>
                <View style={styles.icon_container}>
                    <Icon name="add" size={40} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#29282F",
        height: 70,
        width: "45%",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 20,
    },
    main: {
        width: "100%",
        alignItems: "center",
    },
    icon_container: {
        backgroundColor: "#14E8EB",
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
});

export default BtnAddWorker;