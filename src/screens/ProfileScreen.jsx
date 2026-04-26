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

      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => Alert.alert('Settings')}>
          <Text style={styles.setting}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.avatar}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }}
      />

      <Text style={styles.name}>{profileData.nama}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Edit Profile')}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    elevation: 3,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});