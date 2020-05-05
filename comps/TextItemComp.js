import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TextItemComp = props =>
{
    return(
        <TouchableOpacity onLongPress={props.deleteTxtItem.bind(this, props.id)}>
            <View style={styles.lstItems}>
                <Text>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lstItems: {
        padding:10, marginVertical:5, backgroundColor:'#ccc', borderColor:'#444', borderWidth:1
    },
});

export default TextItemComp;
