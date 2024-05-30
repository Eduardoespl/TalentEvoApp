import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import DescriptionContainer from "../components/descriptionContainer";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type CoursePlaylistScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LessonScreen'
>;

function LessonScreen(): React.JSX.Element {
    const navigation = useNavigation<CoursePlaylistScreenNavigationProp>();

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center", paddingVertical: 20 }}> How to use Angular </Text>
            <TouchableOpacity
                style={{ position: "absolute", top: 20, left: 20 }}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <View style={{ marginBottom: 25 }}>
                <View style={styles.vOverview}>
                </View>
                <Text style={{ fontSize: 22, color: "white", marginTop: 10 }}> Lesson 1 </Text>
                <Text style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 35 }}>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Previus</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Next</Text>
                </TouchableOpacity>
            </View>
            <DescriptionContainer />
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
        width: 320,
        height: 180,
        backgroundColor: "#29282F",
        borderRadius: 20,
    },
});

export default LessonScreen;