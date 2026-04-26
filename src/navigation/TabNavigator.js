import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screen
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // ICON
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        // WARNA
        tabBarActiveTintColor: '#2f95baff',
        tabBarInactiveTintColor: 'gray',

        // STYLE NAVBAR
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 5,
        },
      })}
    >

      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
      />

      <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
      />

      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />

    </Tab.Navigator>
  );
}