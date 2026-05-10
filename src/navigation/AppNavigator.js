import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

// SCREEN
import AddScheduleScreen from '../screens/AddScheduleScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MedicineTypeScreen from '../screens/MedicineTypeScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* LOGIN */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* REGISTER */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />

        {/* BOTTOM TAB */}
        <Stack.Screen 
          name="Main" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* SCREEN TAMBAHAN */}
        <Stack.Screen 
          name="AddSchedule" 
          component={AddScheduleScreen}
          options={{ title: "Tambah Jadwal" }}
        />
        <Stack.Screen
          name="MedicineType"
          component={MedicineTypeScreen}
          options={{ title: 'Tipe Obat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}