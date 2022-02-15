import * as React from "react";
import { Button, View, Image,TextInput } from "react-native";
import logo from "../assets/logo.png";

export function LoginScreen({ navigation }) {
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

      <View >
      <TextInput
          style={{ height: 40,  color:'#67daf9', justifyContent:'center', width:'90%', borderColor: '#67daf9', borderWidth: 1, margin:20 }}
          // Adding hint in TextInput using Placeholder option.
         
          placeholder=" Email"
          placeholderTextColor={'#67daf9'}
         
        
        />
      </View>
      <View >
      <TextInput
          style={{ height: 40,  color:'#67daf9', justifyContent:'center', width:'90%', borderColor: '#67daf9', borderWidth: 1, margin:20 }}
          // Adding hint in TextInput using Placeholder option.
         
          placeholder=" Password"
          placeholderTextColor={'#67daf9'}
         
        
        />
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
          title="Go Back"
          onPress={() => navigation.navigate("start")}
        />
      </View>
    </View>
  );
}

