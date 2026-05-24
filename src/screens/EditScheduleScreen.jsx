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

const EditScheduleScreen = ({ route, navigation }) => {

  const { item } = route.params;

  const [nama, setNama] = useState(item.nama);
  const [dosis, setDosis] = useState(item.dosis);
  const [waktu, setWaktu] = useState(item.waktu);

  const handleUpdate = async () => {
    if (nama === '' || dosis === '' || waktu === '') {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    const { error } = await supabase
      .from('schedule')
      .update({
        nama: nama,
        dosis: dosis,
        waktu: waktu,
      })
      .eq('id', item.id);

    if (error) {
      console.log('UPDATE ERROR:', error.message);
      Alert.alert('Error', 'Gagal update data');
      return;
    }

    Alert.alert('Berhasil', 'Jadwal berhasil diupdate');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Edit Jadwal</Text>

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

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdate}
      >
        <Text style={styles.buttonText}>Update Jadwal</Text>
      </TouchableOpacity>

    </View>
  );
};

export default EditScheduleScreen;

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