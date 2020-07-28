import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function Ex4() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={[styles.text, { fontWeight: "bold" }]}>Welcome!</Text>

      <Text style={styles.text}>DO HAI DUONG</Text>

      <Text style={styles.text}>0335982271</Text>

      <View style={styles.password}>
        <FontAwesome5 name="lock" style={styles.lockIcon} />

        <TextInput
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder="Input password"
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.linkButtonGroup}>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>FORGOT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 40,
    textAlign: "center",
  },
  password: {
    width: "90%",
  },
  lockIcon: {
    fontSize: 20,
    color: "gray",
    position: "absolute",
    top: 18,
    left: 20,
    zIndex: 1,
  },
  passwordInput: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 40,
    textAlign: "center",
    fontSize: 20,
    color: "gray",
    width: "100%",
  },
  loginButton: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#8d015a",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    width: "90%",
  },
  linkButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});
