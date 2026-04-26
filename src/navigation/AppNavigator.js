import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import AddScheduleScreen from '../screens/AddScheduleScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Bottom Tab */}
        <Stack.Screen 
          name="Main" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* Screen tambahan */}
        <Stack.Screen 
          name="AddSchedule" 
          component={AddScheduleScreen}
          options={{ title: "Tambah Jadwal" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}