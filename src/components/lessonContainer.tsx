import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

function LessonContainer(): React.JSX.Element {
    return (
    <View>
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                    <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
                </View>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                    <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
                </View>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                    <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
                </View>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                    <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
                </View>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                    <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
                </View>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 314,
        height: 64,
        backgroundColor: "#29282F",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginBottom: 20,
    },
    scroll: {
        marginTop: 20,
    },
    btnPlay: {
        width: 44,
        height: 44,
        backgroundColor: "#FF824A",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center", // Center the icon inside the button
    },
});

export default LessonContainer;