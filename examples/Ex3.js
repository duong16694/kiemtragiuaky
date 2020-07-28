import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  Dimensions,
  Switch,
  Platform,
  Button,

} from "react-native";
import bulboff from "../assets/the-light-images/bulb-off.jpg";
import bulbon from "../assets/the-light-images/bulb-on.jpg";
const windowWidth = Dimensions.get("window").width;
export default function Ex3() {
  const [isEnabled, setEnabled] = useState(false);
  function toggleSwitch(){
    setEnabled(previousState => !previousState);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={isEnabled ? bulbon : bulboff} style={styles.image} />
      <Switch value={isEnabled} 
      onValueChange={toggleSwitch}
      style={{ 
        alignSelf: "center", 
        transform: Platform.OS === "ios" ? [] : [{ scale: 2}],
        }}
      />
        
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
switch:{

},
  content: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
 image: {
    resizeMode:"contain",
    width : windowWidth,
    height: windowWidth * 925 / 631,

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
