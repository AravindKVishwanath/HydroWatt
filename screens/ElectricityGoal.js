import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';


const Goals = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState('');
  const [goalText, setGoalText] = useState('');
  useEffect(() => {
    const getCurrentMonth = () => {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const currentDate = new Date();
      return months[currentDate.getMonth()];

    };
    setCurrentMonth(getCurrentMonth());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goals</Text>
       <View style={styles.topRight}>
      <Image
        source={require('../assets/icon.png')} 
        style={styles.image}
        />
        </View>
        <View style={styles.topleft}>
        <Image
        source={require('../assets/wave.png')} 
        style={styles.image}
        />
        </View>
        <Text style={styles.text1}>{currentMonth}</Text>
        <View style={styles.centeredInputBox}>
        <TextInput
        style={styles.inputBox}
        placeholder="Enter your goal" 
        value={goalText}
        onChangeText={(text) => setGoalText(text)}
      />
</View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        alert('succesful');
        }}
      >
         <Text style={styles.buttonText}>Update Goals</Text>
      </TouchableOpacity>
      <View style={styles.green}>
    <Text style={styles.textInBox}> Monthly goal</Text>
  </View>
  <View style={styles.green1}>
    <Text style={styles.textInBox}>Progress</Text>
  </View>
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, 
   
  },
  textInBox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    right:90,
    bottom:60,
  },
  text: {
    fontSize: 24,
},
  image: {
  width: 20, 
  height: 20, 
  marginTop: 55,  
},
topRight: {
  position: 'absolute',
  top: 3,
  right: 20,
},
topleft: {
  position: 'absolute',
  top: 3,
  left: 20,
},
text1: {
  fontSize: 26,
  top:30,
  fontWeight: 'bold',
  right: 100,
  
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  
  alignItems: 'center',
},
inputBox: {
  width: '100%',
  height: 40,
  backgroundColor: 'white',
  borderRadius: 10,
  paddingHorizontal: 100,
  marginBottom: 20,
  top:70,
  left:0,
  borderColor:'black',
  borderWidth:2,
},
centeredInputBox: {
  alignItems: 'center', 
},
button: {
  backgroundColor: '#00A894DE',
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
 top:60,
  
},

green: {
  backgroundColor: '#EEEEEE',
  width: 310,
  height: 171,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  top: 100,
},
green1: {
  backgroundColor: '#EEEEEE',
  width: 310,
  height: 171,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  top: 120,
},
}
);

export default Goals;