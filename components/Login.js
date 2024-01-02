import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
const Login = ()=>{
    return (
    
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content"></StatusBar>
        <View style={{fotWeight:'bold',fontSize:30,color:'black'}}>Login</View>
        <Text>By signing i you are agreeing</Text>
        <View style={{flexDiretion:'row'}}>
            <Text>our</Text><TouchableOpacity onPress={()=>Alert.alert('fdgioxdoi')}>
                <Text style={{}}>Term and privacy policy</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.form}>
            <TextInput placeholder="Email address" style={styles.ip}></TextInput>
        </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingHorizontal:30
    },
    title:{
        marginTop:30,
        alignItems:'center'
    },
})
export default Login;