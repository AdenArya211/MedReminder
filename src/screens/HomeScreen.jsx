import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
  Animated,
} from 'react-native';

import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import ReminderCard from '../components/reminderCard.jsx';

import { menuData } from '../data/menuData';
import { reminderData } from '../data/reminderData';

const HomeScreen = ({ navigation }) => {

  const [reminders] = useState(reminderData);

  // ANIMASI
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleMenu = (menu) => {
    if (menu === 'Lihat Jadwal') {
      navigation.navigate('Schedule');
    } else if (menu === 'Tambah Jadwal') {
      navigation.navigate('AddSchedule');
    } else {
      Alert.alert('Menu Dipilih', menu);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Header />

      {/* Banner Animasi */}
      <Animated.Image
        style={[
          styles.banner,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
        source={{
          uri: 'https://img.freepik.com/free-vector/tiny-pharmacists-with-prescription-drugs-patients-pharmaceutical-industry-rx-symbol-bottle-painkillers-flat-vector-illustration-pharmacy-medicine-health-concept-banner_74855-25358.jpg'
        }}
      />

      {/* Menu Animasi */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <View style={styles.grid}>
          {menuData.map(item => (
            <MenuCard
              key={item.id}
              title={item.title}
              onPress={() => handleMenu(item.title)}
            />
          ))}
        </View>
      </Animated.View>

      <Text style={styles.sectionTitle}>Pengingat</Text>

      {/* Reminder Animasi */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        {reminders.map(item => (
          <ReminderCard
            key={item.id}
            image={item.image}
            text={item.text}
          />
        ))}
      </Animated.View>

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