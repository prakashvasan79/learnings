import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
// Custom components
import TextItemComp from "./comps/TextItemComp";
import TextInputComp from "./comps/TextInputComp";

export default function App() {
  const [ txtList, setTxtList ] = useState([]);
  const [ launchMode, setLaunchMode ] = useState(false);

  const addHandler = (txt) => {
    if(txt.trim() != "")
    {
      setTxtList(curList => [...curList, { id:Math.random().toString(), val:txt }] );
      setLaunchMode(false);
      console.log("Added item : " + txt);
    }
    else
      console.log("Text field is empty !!");
  };
  const deleteHandler = (txtID) => {
      setTxtList(curList => { return curList.filter( (item) => item.id !== txtID ); });
      console.log("Removed item : " + txtID); 
  };
  const cancelHandler = () => {
    setLaunchMode(false);
    console.log("Cancelled content addition...");
  };

  return (
    <View style={ {padding:30} }>
      <Button title="ADD CONTENT" onPress={ () => setLaunchMode(true) }/>
      <TextInputComp launch={launchMode} onAddTxtItem={addHandler} onCancelTxtItem={cancelHandler}/>
      <FlatList data={txtList} keyExtractor={ (item, index) => item.id }
        renderItem={ itemData => <TextItemComp id={itemData.item.id} label={itemData.item.val} deleteTxtItem={deleteHandler}/> }/>
    </View>
  );
}

// deleteTxtItem={deleteHandler.bind(itemData.item.id)}

const styles = StyleSheet.create({
  container: {
    padding: 30, flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'
  },
});
