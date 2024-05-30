import React from "react";
import { View, StyleSheet } from "react-native";

function CourseCard(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <View style={styles.video}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#29282F",
        width: 300,
        height: 194,
        borderRadius: 15,
        marginHorizontal: "12%",
        alignItems: "center",
        marginVertical: 20,
    },
    video: {
        backgroundColor: "#D1D0D7",
        width: 271,
        height: 123,
        borderRadius: 10,
        marginTop: 15,
    }
});

export default CourseCard;