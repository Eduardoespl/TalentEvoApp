import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import LessonContainer from "../components/lessonContainer";
import DescriptionContainer from "../components/descriptionContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type CoursePlaylistScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'CoursePlaylistScreen'
>;

function CoursePlaylistScreen(): React.JSX.Element {
    const [activeComponent, setActiveComponent] = useState<"playlist" | "description">("playlist");
    const navigation = useNavigation<CoursePlaylistScreenNavigationProp>();

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center", paddingVertical: 20 }}> Course Overview </Text>
            <TouchableOpacity
                style={{ position: "absolute", top: 20, left: 20 }}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" size={30} color="white" />
            </TouchableOpacity>

            <View style={{ marginBottom: 25 }}>
                <View style={styles.vOverview}>
                </View>
                <Text style={{ fontSize: 22, color: "white", marginTop: 10 }}> How to use Angular </Text>
                <Text style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.5)" }}> 20 hours </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 35 }}>
                <TouchableOpacity
                    style={activeComponent === "playlist" ? styles.btnActive : styles.btn}
                    onPress={() => setActiveComponent("playlist")}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Playlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={activeComponent === "description" ? styles.btnActive : styles.btn}
                    onPress={() => setActiveComponent("description")}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Description</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {activeComponent === "playlist" ? <LessonContainer /> : <DescriptionContainer />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#010104",
        height: "100%",
        alignItems: "center",
    },
    btnActive: {
        width: 140,
        height: 44,
        backgroundColor: "#FF824A",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        width: 140,
        height: 44,
        backgroundColor: "#29282F",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    vOverview: {
        width: 314,
        height: 200,
        backgroundColor: "#D1D0D7",
        borderRadius: 15,
    },
});

export default CoursePlaylistScreen;
