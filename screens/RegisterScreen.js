import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {Button, Input, Image, Text} from "react-native-elements";
import { KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [Name , setName] = useState('');
  const [Email , setEmail] = useState('');
  const [Password , setPassword] = useState('');
  
  const register= async()=>{
    if(Email && Password){
      try{
       const userCredential=   await createUserWithEmailAndPassword(auth ,Email, Password); 
          navigation.navigate("Login");

          const user = userCredential.user;
          console.log(userCredential);
          updateProfile( user,{
            displayName: Name,
            
          });
          
      }catch(err){
        console.log("error in registr",err);
      }
    }
 }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 45,fontWeight: "700", color:"#4D40D9"}}>Hydro</Text>
            <Text style={{fontSize: 45,fontWeight: "700", color:"#E15959"}}>Watt</Text>
        </View>
        <Text>Smart choice for a Greener Tomorrow</Text>
      <Text h3 style={{margin: 60, textAlign: "center"}}>
        Create an Account
      </Text>
      <View style={styles.inputContainer}>
          <Input placeholder="Full Name" autofocus type='text' value={Name} onChangeText={(text) => setName(text)}/>
          <Input placeholder="Email" type='text' value={Email} onChangeText={(text) => setEmail(text)}/>
          <Input placeholder="Password" secureTextEntry type='text' value={Password} onChangeText={(text) => setPassword(text)}/>
      </View>
      <Button containerStyle={styles.button} title="Register" onPress={register} raised/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",

},
inputContainer: {
    width: 300,
    marginTop: 20,
},
button: {
    width: 200,
    marginTop:10,
    borderRadius:4,
}
})