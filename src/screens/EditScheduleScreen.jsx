import React, { useState } from 'react';

import {
  View,
  Text,
 StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import InputField from '../components/InputField';

const EditScheduleScreen = ({ route, navigation }) => {

  const { item } = route.params;

  const [nama, setNama] = useState(item.nama);
  const [dosis, setDosis] = useState(item.dosis);
  const [waktu, setWaktu] = useState(item.waktu);

  // UPDATE API
  const handleUpdate = async () => {

    if (nama === '' || dosis === '' || waktu === '') {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    try {

      await fetch(
        `https://6a0192ec36fb6ad04de12f3a.mockapi.io/schedule/${item.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama,
            dosis,
            waktu,
          }),
        }
      );

      Alert.alert('Berhasil', 'Jadwal berhasil diupdate');

      navigation.goBack();

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Gagal update data');
    }
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