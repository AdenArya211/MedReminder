import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
} from 'react-native';

import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import ReminderCard from '../components/reminderCard.jsx';

import { menuData } from '../data/menuData';
import { reminderData } from '../data/reminderData';

const HomeScreen = () => {

  // STATE (biar sesuai tugas)
  const [reminders, setReminders] = useState(reminderData);

  const handleMenu = (menu) => {
    Alert.alert('Menu Dipilih', menu);
  };

  return (
    <ScrollView style={styles.container}>

      <Header />

      {/* BANNER */}
      <Image
        style={styles.banner}
        source={{
          uri: 'https://img.freepik.com/free-vector/tiny-pharmacists-with-prescription-drugs-patients-pharmaceutical-industry-rx-symbol-bottle-painkillers-flat-vector-illustration-pharmacy-medicine-health-concept-banner_74855-25358.jpg'
        }}
      />

      {/* MENU */}
      <View style={styles.grid}>
        {menuData.map(item => (
          <MenuCard
            key={item.id}
            title={item.title}
            onPress={() => handleMenu(item.title)}
          />
        ))}
      </View>

      {/* PENGINGAT */}
      <Text style={styles.sectionTitle}>Pengingat</Text>

      {reminders.map(item => (
        <ReminderCard
          key={item.id}
          image={item.image}
          text={item.text}
        />
      ))}

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  banner: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});