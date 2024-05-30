import React from "react";
import { View, StyleSheet, Text } from "react-native";

function DescriptionContainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam porro iusto maxime nostrum reiciendis quod quos, ad velit recusandae excepturi dolorum minus praesentium consequatur explicabo, deserunt quaerat laudantium veritatis temporibus.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 314,
        height: 200,
        backgroundColor: "#29282F",
        borderRadius: 15,
        marginTop: 20,
        padding: 20,
    },
    description: {
        color: "white",
        fontSize: 16,
    }
});

export default DescriptionContainer;