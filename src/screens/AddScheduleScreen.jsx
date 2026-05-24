import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import InputField from '../components/InputField';
import { supabase } from '../services/supabase';

const AddScheduleScreen = ({ navigation }) => {

  const [nama, setNama] = useState('');
  const [dosis, setDosis] = useState('');
  const [waktu, setWaktu] = useState('');

  const handleAdd = async () => {
    if (nama === '' || dosis === '' || waktu === '') {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    const { error } = await supabase
      .from('schedule')
      .insert([
        {
          nama: nama,
          dosis: dosis,
          waktu: waktu,
        },
      ]);

    if (error) {
      console.log('INSERT ERROR:', error.message);
      Alert.alert('Error', 'Gagal menambahkan data');
      return;
    }

    Alert.alert('Berhasil', `${nama} ditambahkan`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tambah Jadwal</Text>

      <InputField
        placeholder="Nama Obat"
        value={nama}
        onChangeText={setNama}
      />

      <InputField
        placeholder="Dosis"
        value={dosis}
        onChangeText={setDosis}
      />

      <InputField
        placeholder="Waktu"
        value={waktu}
        onChangeText={setWaktu}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Tambah Jadwal</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AddScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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