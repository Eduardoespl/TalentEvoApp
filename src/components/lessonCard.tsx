import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type LessonCardNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LessonScreen'
>;

function LessonCard(): React.JSX.Element {
    const navigation = useNavigation<LessonCardNavigationProp>();

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 18, color: "white" }}> Lesson </Text>
                <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}> 10:00 minutes </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('LessonScreen')}>
                <View style={styles.btnPlay}>
                    <Icon name="play" size={25} color="white" />
                </View>
            </TouchableOpacity>
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
    btnPlay: {
        width: 44,
        height: 44,
        backgroundColor: "#FF824A",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LessonCard;
