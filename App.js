import React from 'react';
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

  // Fungsi ketika menu ditekan
  const handleMenu = (menu) => {
    Alert.alert('Menu Dipilih', menu);
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER: NAMA APP + SEARCH */}
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
          onPress={() => handleMenu('Kosultasi')}
        >
          <Text style={styles.text}>Web Konsultasi Online</Text>
        </TouchableOpacity>

      </View>

      {/* ILUSTRASI BAWAH */}
      <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>Pengingat</Text>

        <Image
          style={styles.bottomImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOZ_ZmUbzk9tahWWxolIOqvkrFNFu9kiU-Q&s'
          }}
        />

        <Text style={styles.desc}>
          Paracetamol belum diminum hari ini, jangan lupa untuk minum obat teratur.
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <Image
          style={styles.bottomImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqQ4BwiybUBI8j6VcjHTUo4EAqlBl1BnqMg&s'
          }}
        />

        <Text style={styles.desc}>
          3 obat sudah diminum hari ini, tunggu beberapa jam sebelum meminum obat yang lain.
        </Text>
      </View>

    </ScrollView>
  );
}

// STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  // HEADER
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

  // BANNER
  banner: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    marginBottom: 20,
  },

  // GRID
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

  // BAWAH
  bottomSection: {
    marginTop: 10,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  bottomImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    marginBottom: 8,
  },

  desc: {
    fontSize: 12,
    color: '#666',
  },
});