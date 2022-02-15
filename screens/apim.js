import * as React from "react";
import { Button, View, Text, FlatList } from "react-native";
import axios from "axios";

export function Apim({ navigation }) {

let data=[];
let get=axios.get('https://jsonplaceholder.typicode.com/posts')
.then((x)=>{
   
   data=data.push(x.data);
    console.log(x.data);
})

console.log("hello");

console.log(data);




  return (
      
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#161b22",
        flexDirection: "column",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
