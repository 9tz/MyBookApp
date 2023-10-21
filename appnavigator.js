// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import your HomeScreen component
import BookForm from './bookform;' // Import your BookForm component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="AddBook" component={BookForm} options={{ title: 'Add Book' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
