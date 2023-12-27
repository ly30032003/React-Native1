import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./CartContext.js";
import {Cart} from "./Detail/Cart.js";
import { CartIcon } from "./components/CartIcon.js";
import Product from "./components/Product.js";
import ProductDetails from "./Detail/ProductDetails.js";



const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Product}  options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails}  options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})}  />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;