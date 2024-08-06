import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import Home from './components/Home';
import Details from './components/Details';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} options={({ route }) => ({
          headerRight: () => {
            return (
              <Button
              title='Buy'
              onPress={() => {}}
              disabled={route.params.stock === 0}
              />
            )
          }
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}