import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CourseCard from "../components/courseCard";
import Icon from 'react-native-vector-icons/MaterialIcons';

function UserScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={{color:"white", fontSize:25, fontWeight:"bold", textAlign:"center", marginTop:15}}>Profile</Text>
          <Icon name="logout" size={30} color="white" style={{position:"absolute", top: 15, right: 15}}/>
        </View>
        <View style={styles.user}>  
        {/*Este se puede volver un componente*/}
          <View style={styles.foto}>
          </View>
          <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>
            Eduardo Espiritu
          </Text>
          <Text style={{fontSize:15, color:"rgba(255, 255, 255, 0.6)"}}>
            Developer
          </Text>
          <View style={styles.badges}>
            <Text style={{color:"white"}}>
              2 Courses
            </Text>
            <Text style={{color:"white"}}>
              2 Certificates
            </Text>
            <Text style={{color:"white"}}>
              2 Skills
            </Text>
          </View>
        </View>
        <View style={styles.botones}>
          <TouchableOpacity style={styles.buttonPressed}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>Collection</Text>
          </TouchableOpacity>
        </View>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#010104",
  },
  body: {
    marginBottom: 20,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#FF824A",
    height: 150,
    width: "100%",
  },
  buttonPressed: {
    backgroundColor: "#FF824A",
    borderRadius: 15,
    width: 135,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    //inner shadow
  },
  button: {
    backgroundColor: "#29282F",
    borderRadius: 15,
    width: 135,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginTop: 170,
  },
  foto: {
    width: 77,
    height: 77,
    borderRadius: 50,
    backgroundColor: "#D1D0D7",
    marginBottom: 15,
  },
  user: {
    flex:1,
    position: "absolute",
    top: 70,
    backgroundColor: "#29282F",
    alignItems: "center",
    width: 300,
    height: 228,
    borderRadius: 15,
    justifyContent: "center",
  },
  badges: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    gap: 30,
  }

});

export default UserScreen;