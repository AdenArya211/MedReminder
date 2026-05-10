import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {

    if (
      nama === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password tidak sama');
      return;
    }

    Alert.alert('Registrasi Berhasil');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama"
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#2f95baff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});