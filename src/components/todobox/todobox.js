import React,{useState} from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    TouchableOpacity,
    } from 'react-native';
import DeleteButton from '../button/deleteButton';


const TodoBox = ({id, text} : {id : String, text : String}) => {
    return(
    
    <View style={styles.todoBox}> 
        <Text style = {styles.text}>
            {id+1}.) {text}
        </Text>
        <DeleteButton/>
    </View>
    
        )
}



const styles = StyleSheet.create({

    todoBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        marginLeft:'auto',
        marginRight:'auto',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        width:'95%',
       
    },

    text:{
        fontSize:24,
        marginLeft:10,
        width:'70%',
    }

});

export default TodoBox;