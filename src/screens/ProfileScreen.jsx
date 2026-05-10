import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { profileData } from '../data/profileData';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity onPress={() => Alert.alert('Settings')}>
          <Text style={styles.setting}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* FOTO PROFIL */}
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }}
      />

      {/* NAMA */}
      <Text style={styles.name}>{profileData.nama}</Text>

      {/* EMAIL */}
      <Text style={styles.email}>aden@gmail.com</Text>

      {/* BUTTON EDIT */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Edit Profile')}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* STATISTIK */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>📊 Statistik</Text>

        <Text style={styles.info}>Total Jadwal : 12</Text>
        <Text style={styles.info}>Obat Aktif : 5</Text>
        <Text style={styles.info}>Pengingat Hari Ini : 3</Text>

      </View>

      {/* MENU */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>⚙️ Menu</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Tentang Aplikasi')}
        >
          <Text style={styles.menuText}>ℹ️ Tentang Aplikasi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Bantuan')}
        >
          <Text style={styles.menuText}>❓ Bantuan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Logout Berhasil')}
        >
          <Text style={[styles.menuText, { color: 'red' }]}>
            🚪 Logout
          </Text>
        </TouchableOpacity>

      </View>

      {/* QUOTE */}
      <Text style={styles.quote}>
        "Jangan lupa minum obat tepat waktu 💊"
      </Text>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  setting: {
    fontSize: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  email: {
    color: 'gray',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2f95baff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  info: {
    fontSize: 14,
    marginBottom: 5,
  },

  menuItem: {
    paddingVertical: 8,
  },

  menuText: {
    fontSize: 15,
  },

  quote: {
    marginTop: 10,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
  },
});