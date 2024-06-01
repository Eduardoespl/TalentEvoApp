import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'VacanteForm'>;

function BtnAddVacante(): React.JSX.Element {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handlePress = () => {
        navigation.navigate("VacanteForm");
    };

    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.container} onPress={handlePress}>
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

export default BtnAddVacante;