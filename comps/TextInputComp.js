import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TextInputComp = props =>
{
    const [ txt, setEnteredTxt ] = useState('');
    const inpTxtHandler = (txt) => {
        setEnteredTxt(txt);
    };
    const internalAddHandler = () => {
        props.onAddTxtItem(txt);
        setEnteredTxt('');
    };
    const internalCancelHandler = () => {
        props.onCancelTxtItem();
        setEnteredTxt('');
    };
       
    return(
        <Modal visible={props.launch} animationType="slide">
            <View style={ styles.inputCont }>
                <TextInput placeholder="Enter something" style={ styles.inputTxt } onChangeText={inpTxtHandler} value={txt}></TextInput>
                <View style={ styles.inpButton }>
                    <View style={ styles.resizeBut }><Button title="ADD" onPress={internalAddHandler}/></View>
                    <View style={ styles.resizeBut }><Button title="CANCEL" color="red" onPress={internalCancelHandler}/></View>
                </View>
            </View>
        </Modal>
    );
}
// Using anonymous arrow function as an alternative to using BIND 
// <Button title="ADD" onPress={() => props.onAddTxtItem(txt)}/>
// <View style={ styles.resizeBut }><Button title="ADD" onPress={props.onAddTxtItem.bind(this, txt)}/></View>
// <View style={ styles.resizeBut }><Button title="CANCEL" color="red" onPress={props.onCancelTxtItem}/></View>

const styles = StyleSheet.create({
    inputCont: {
        paddingTop:20, flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"
    },
    inputTxt: {
        width:'80%', padding:5, borderColor:'black', borderWidth:1, marginBottom:10
    },
    inpButton: {
        width:'55%', flexDirection:"row", justifyContent:"space-between"
    },
    resizeBut: {
        width:'45%'
    }
});

export default TextInputComp;
