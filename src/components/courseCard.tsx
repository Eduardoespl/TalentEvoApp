import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type CourseCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CoursePlaylistScreen'
>;

function CourseCard(): React.JSX.Element {
  const navigation = useNavigation<CourseCardNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CoursePlaylistScreen')}>
      <View style={styles.container}>
        <View style={styles.video}>
        </View>
      </View>
    </TouchableOpacity>
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
