import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function kiemtragiuaky() {
  return (
    <Image source={require('anhnen.jpg')} />
    <SafeAreaView style={styles.container}>
      

      <Text style={[styles.text, { fontWeight: "bold" }]}>QUIZ</Text>

      <View style={styles.content}>
      <FontAwesome5 name="id-card" style={styles.card} />
      <TouchableOpacity style={styles.play}>
        <Text style={styles.text}>Play quiz</Text>
      </TouchableOpacity>

      <FontAwesome5 name="user-friends" style={styles.fr} />
        <TouchableOpacity style={styles.text1}>
          <Text style={styles.text}>Multiplayer 1 to 1</Text>
        </TouchableOpacity>
        <FontAwesome5 name="money-check" style={styles.check} />
        <TouchableOpacity style={styles.text1}>
          <Text style={styles.text}>More categories</Text>
        </TouchableOpacity>
        <FontAwesome5 name="chart-bar" style={styles.bar} />
        <TouchableOpacity style={styles.text1}>
          <Text style={styles.text}>World score</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <View style={styles.line}></View>
        <FontAwesome5 name="cog" style={styles.icon} />
        <Text style={styles.tx1}> Settings </Text>
        <FontAwesome5 name="tasks" style={styles.icon} />
        <Text style={styles.tx1}> About </Text>
        <View style={styles.line}></View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    alignItems: "center",
  },
  text:{
    fontSize: 30,
    color: 'while',
    width: 200,
    height: 100,
  },
  text1: {
    backgroundColor:'while',
    fontSize: 20,
    color: 'black',
    borderRadius: 15,
    padding: 10,
    textAlign : "center",
  },
  tx1:{
    fontSize: 10,
    textAlign: "center",
    flexDirection: "row",
  },
  card:{
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  fr: {
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  check:{
    backgroundColor: 'purple',
    borderRadius: 10,

  },
  bar:{
backgroundColor: 'green',
borderRadius: 10,
  },
});
