import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { Header, Card, Button } from "react-native-elements";
// Custom components
import TextItemComp from "./comps/TextItemComp";
import TextInputComp from "./comps/TextInputComp";

export default function App() {
  const [txtList, setTxtList] = useState([]);
  const [launchMode, setLaunchMode] = useState(false);

  const addHandler = (txt) => {
    if (txt.trim() != "") {
      setTxtList((curList) => [
        ...curList,
        { id: Math.random().toString(), val: txt },
      ]);
      setLaunchMode(false);
      console.log("Added item : " + txt);
    } else console.log("Text field is empty !!");
  };
  const deleteHandler = (txtID) => {
    setTxtList((curList) => {
      return curList.filter((item) => item.id !== txtID);
    });
    console.log("Removed item : " + txtID);
  };
  const cancelHandler = () => {
    setLaunchMode(false);
    console.log("Cancelled content addition...");
  };

  return (
    <View>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY BUCKET LIST", style: { color: "#fff" } }}
      />
      <Card>
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("./images/bucketlist.jpg")}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button
          title="ADD ITEMS TO LIST"
          onPress={() => setLaunchMode(true)}
          icon={{ name: "code", color: "white" }}
        />
        <TextInputComp
          launch={launchMode}
          onAddTxtItem={addHandler}
          onCancelTxtItem={cancelHandler}
        />
        <FlatList
          data={txtList}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <TextItemComp
              id={itemData.item.id}
              label={itemData.item.val}
              deleteTxtItem={deleteHandler}
            />
          )}
        />
      </Card>
    </View>
  );
}

// deleteTxtItem={deleteHandler.bind(itemData.item.id)}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
