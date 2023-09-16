import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign } from 'expo-vector-icons';
import Goals1 from './WaterGoal'

const WaterMonitor = ({navigation}) => {

    const Home = ()=>{
        navigation.replace("Dashboard");
    }
    const settings =()=>{
        navigation.navigate("Settings");
    }
    const WaterGoals =()=>{
        navigation.navigate("")
    }
    const WaterSummary=()=>{

    }

    useLayoutEffect(()=>{
        navigation.setOptions({
          title:"WaterMonitor",
          headerStyle: {backgroundColor : "#fff"},
            headerTitleStyle: {color:"black",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center"
          },
            headerTintColor: "black",
            headerLeft: ()=>(
              <View style={{marginLeft:10 }}>
              <TouchableOpacity onPress={Home} activeOpacity={0.5} style={{marginRight:70}}>
              <Image style={{height:35,width:35}} source={require('../assets/icon.png')}/>
              </TouchableOpacity>
              </View>
            ),
            headerRight: ()=>(
              <View style={{flexDirection:"row", justifyContent:"space-between",width:80,marginRight:20}}>
                  <TouchableOpacity onPress={settings} activeOpacity={0.5} style={{marginLeft:50}}>
                    <AntDesign name='user' size={24} color='black'/>
                  </TouchableOpacity>
              </View>
            ),
    
        })
      
      },[navigation])

  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1,marginRight:170}}>
      <View>
        <TouchableOpacity style={{width:100,height:40,borderRadius:20, backgroundColor:"#D9D9D9",marginTop:-150,marginLeft:-100,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <AntDesign name='wifi' size={18} color='green' style={{marginRight:10}}/>
                <Text>Online</Text>
        </TouchableOpacity>
      </View>  
      <View style={{height:200,width:200, backgroundColor:"#fff",borderRadius:150,borderColor:"#00A894", borderWidth:5,alignItems:"center",justifyContent:"center",marginTop:-80}}>
            <Text style={{fontSize:30,fontWeight:500}} >123</Text>
            <Text style={{fontSize:20,fontWeight:400}} >KWh</Text>
      </View>
      <View style={{height:125,width:125, backgroundColor:"#fff",borderRadius:150,borderColor:"#00A894", borderWidth:3,alignItems:"center",justifyContent:"center",marginLeft:380,marginBottom:10,marginTop:-80}}>
            <Text style={{fontSize:30,fontWeight:500}} >3.55</Text>
            <Text style={{fontSize:20,fontWeight:400}} >Amps</Text>
      </View>
      
      <View style={{height:100}}/>
      <View style={{flexDirection:"row",marginLeft:150}}>
        <TouchableOpacity style={{width:150,height:50,backgroundColor:"#00A894",borderRadius:30,justifyContent:"center",alignItems:"center"}}
         onPress={() => navigation.navigate('WaterGoal')}>
                <Text>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:20,width:150,height:50,backgroundColor:"#00A894",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text>Summary</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WaterMonitor;

const styles = StyleSheet.create({})