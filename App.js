import React, { useState } from 'react';
import ReminderCard from './src/components/ReminderCard';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

export default function App() {

  // STATE untuk menyimpan data pengingat obat
  const [reminders, setReminders] = useState([
    {
      id: 1,
      text: 'Paracetamol belum diminum hari ini, jangan lupa minum obat.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOZ_ZmUbzk9tahWWxolIOqvkrFNFu9kiU-Q&s',
    },
    {
      id: 2,
      text: '3 obat sudah diminum hari ini, tunggu sebelum minum lagi.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqQ4BwiybUBI8j6VcjHTUo4EAqlBl1BnqMg&s',
    },
  ]);

  // Fungsi ketika menu ditekan
  const handleMenu = (menu) => {
    Alert.alert('Menu Dipilih', menu);
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>MedReminder</Text>

        <TextInput
          style={styles.search}
          placeholder="Cari obat..."
        />
      </View>

      {/* ILUSTRASI ATAS */}
      <Image
        style={styles.banner}
        source={{
          uri: 'https://img.freepik.com/free-vector/tiny-pharmacists-with-prescription-drugs-patients-pharmaceutical-industry-rx-symbol-bottle-painkillers-flat-vector-illustration-pharmacy-medicine-health-concept-banner_74855-25358.jpg'
        }}
      />

      {/* MENU GRID */}
      <View style={styles.grid}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleMenu('Lihat Jadwal')}
        >
          <Text style={styles.text}>Lihat Jadwal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleMenu('Tambah Jadwal')}
        >
          <Text style={styles.text}>Tambah Jadwal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleMenu('Tipe Obat')}
        >
          <Text style={styles.text}>Tipe Obat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleMenu('Konsultasi')}
        >
          <Text style={styles.text}>Web Konsultasi Online</Text>
        </TouchableOpacity>

      </View>

      {/* SECTION PENGINGAT */}
      <Text style={styles.sectionTitle}>Pengingat</Text>

      {/* LOOP DATA STATE + KIRIM PROPS */}
      {reminders.map((item) => (
        <ReminderCard
          key={item.id}
          image={item.image}
          text={item.text}
        />
      ))}

    </ScrollView>
  );
}

// STYLE (tidak berubah)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  search: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
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

  card: {
    backgroundColor: '#fff',
    width: '47%',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },

  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});