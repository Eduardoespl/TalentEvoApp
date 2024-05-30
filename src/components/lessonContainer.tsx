import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import LessonCard from "./lessonCard";

function LessonContainer(): React.JSX.Element {
    return (
    <View>
        <ScrollView style={styles.scroll}>
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
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