import * as React from "react";
import { Button, View, Image,TextInput } from "react-native";
import logo from "../assets/logo.png";

export function RegisterScreen({ navigation }) {
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
        style={{ justifyContent: "center", alignItems: "center", margin: 15}}
      >
        <Image source={logo} style={{ width: 250, height: 250 }} />
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
      <View >
      <TextInput
          style={{ height: 40,  color:'#67daf9', justifyContent:'center', width:'90%', borderColor: '#67daf9', borderWidth: 1, margin:20 }}
          // Adding hint in TextInput using Placeholder option.
         
          placeholder=" Repeat Password"
          placeholderTextColor={'#67daf9'}
         
        
        />
      </View>
    

      <View style={{ margin: 20 }}>
        <Button
          color={"#67daf9"}
          width="90"
          title="Register"
          onPress={() => navigation.navigate("start")}
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

