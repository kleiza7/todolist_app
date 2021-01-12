import React,{useState} from 'react';
import { 
    StyleSheet, 
    ImageBackground, 
    Text,
    View, 
    TouchableOpacity, 
    TextInput,
    FlatList,
    SafeAreaView,
    
    } from 'react-native';
import TodoBox from '../components/todobox/todobox';

const backgroundImg = require('../components/images/background.jpg'); 




const MainScreen = () =>{
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText) => {
        setTodos([...todos,
            {
                id: todos.length ,
                value: todoText
            }
        ]);
    }

    const clearTodo = () =>{
        setTodos([""]);
    }
   
return(

<ImageBackground source={backgroundImg} style={styles.background}>
<Text style={styles.header}>To Do List</Text>

    <SafeAreaView style={styles.todoContainer}>
    <FlatList 
    data = {todos}
    
    renderItem = {({item}) => (
        // <Text style={{fontSize:16}}>{item.id}{item.value}</Text>
        <TodoBox id={item.id} text={item.value}/>
    )} 
    />
    </SafeAreaView>


<TextInput style={styles.textInput} value={todoText} onChangeText={(value) => setTodoText(value)}></TextInput>

<View style={styles.buttonGroup}>
<TouchableOpacity style={styles.button} onPress={() => clearTodo}>
    <Text style={styles.buttonText}>Temizle</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => {
addTodo(todoText);
console.log(todos);
setTodoText("");
}}>
    <Text style={styles.buttonText}>Ekle</Text>
</TouchableOpacity>
</View>
    
</ImageBackground>


)
}



const styles = StyleSheet.create({

background : {
    width:'100%',
    height:'100%',
},

header : {
    fontSize:32,
    textAlign:'center',
    marginTop:130,
},


textInput : {
    backgroundColor: 'white',
    borderWidth:1,
    width:'73%',
    marginLeft: 65,
    marginTop:20,
},

button :{
    backgroundColor:'rgba(0,0,0,0.7)',
    width:150,
    height:50,
    borderRadius:50,
},

buttonText :{
    fontSize:36,
    textAlign:'center',
},

buttonGroup :{
 flexDirection:'row',
 marginTop:20,
 justifyContent:'space-evenly',
},

todoContainer:{
    
    width:'70%',
    marginLeft:70,
    height:'50%',
    marginTop:30,
}


});

export default MainScreen;
