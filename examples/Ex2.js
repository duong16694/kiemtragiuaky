import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";

export default function Ex2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textCenter}>Menu</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.textCenter}>Hello world</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textCenter}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  box: {
    justifyContent: "center",
    width: "100%",
    height: 100,
    backgroundColor: "red",
  },
  textCenter: {
    textAlign: "center",
  },
});
