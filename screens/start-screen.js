import * as React from "react";
import { Button, View, Image } from "react-native";
import logo from "../assets/logo.png";

export function StartScreen({ navigation }) {
    
  return (
      
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#161b22",
        flexDirection: "column",
      }}
    >
      
 
      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
      >
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>

      <View style={{ margin: 20 }}>
        <Button
          color={"#67daf9"}
          width="90"
          title="Login"
          onPress={() => navigation.navigate("login")}
        />
      </View>

      <View style={{ margin: 20 }}>
        <Button
          color={"#67daf9"}
          title="Register"
          onPress={() => navigation.navigate("register")}
        />
      </View>
      <View style={{ margin: 20 }}>
        <Button
          color={"#67daf9"}
          title="apim"
          onPress={() => navigation.navigate("apim")}
        />
      </View>
    </View>
  );
}
