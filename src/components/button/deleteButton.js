import React,{useState} from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    TouchableOpacity, 
    
    
    } from 'react-native';



    const DeleteButton = () => {
        return(


            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>X</Text>
            </TouchableOpacity>


        )
    }


    const styles = StyleSheet.create({
        text:{
            fontSize:18,
            textAlign:'center',
        },

        button:{
            borderWidth:2,
            width:30,
            height:30,
            borderRadius:50,
        },
    });

    export default DeleteButton;