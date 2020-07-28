import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import imagefb from "../assets/facebook.png";
const windowWidth = Dimensions.get("window").width;

export default function Ex5() {
  return (
   <>
    <Image style={styles.images} source={imagefb} />
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <TextInput style={styles.input,styles.sdt} placeholder="Số điện thoại hoặc email">
      </TextInput>
      <TextInput style={styles.input,styles.mk} placeholder="Mật khẩu">
      </TextInput>
      <TouchableOpacity style={styles.dn}>
        <Text style={styles.tx}> Đăng nhập </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.qmk}>
        <Text style={styles.tx1}> Quên mật khẩu? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ql}>
        <Text style={styles.tx2}> Quay lại </Text>
      </TouchableOpacity>
      <View>
      <View style={styles.row}>
        <View style={styles.line}></View>
        <Text style={styles.txh}> HOẶC </Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={styles.ttk}>
        <Text style={styles.txtk}> Tạo tài khoản mới </Text>
      </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    padding: 20, 
    justifyContent:"space-between",


  },
  images: {
    //resizeMode:"contain",
    width : windowWidth,
    height: (windowWidth * 460) / 750,
  },
  input: {
    width: '100%',
    height: 45,
    fontSize: 16,
    backgroundColor: "#fff",
    borderColor: "lightgray",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  sdt: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth:0,
  },
  mk: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth:0,

  },
  dn: {
    backgroundColor: "#1977f3",
    marginTop: 20,
    width: 350,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  tx: {
    color: "#a1c9fa",
    textAlign: "center",
    fontSize: 18,
  },
  qmk: {
    marginTop: 20,
    alignSelf: "center",
  },
  tx1: {
    color: "#286fdd",
    fontSize: 16,
  },
  ql: {
    marginTop: 70,
    alignSelf: "center",
  },
  tx2: {
    color: "blue",
    fontSize: 15,
  },
  row: {
    marginTop: "30%",
    flexDirection: "row",
    justifyContent: "center",
  },
  line: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: "30%",
  },
  txh: {
    fontSize: 14,
    marginTop: -7,
    color: "#353535",
  },
  ttk: {
    backgroundColor: "#e7f3ff",
    width: "100%",
    height: 40,
    marginTop: 350,
    borderRadius: 5,
    justifyContent: "center",
  },
  txtk: {
    color: "#3982dd",
    textAlign: "center",
    fontSize: 16,
  },
});
