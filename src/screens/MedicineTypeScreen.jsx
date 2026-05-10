import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { medicineData } from '../data/medicineData';

const MedicineTypeScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Informasi Obat</Text>

      {medicineData.map((item) => (
        <View key={item.id} style={styles.card}>

          <Text style={styles.nama}>
            💊 {item.nama}
          </Text>

          <Text style={styles.info}>
            <Text style={styles.bold}>Fungsi : </Text>
            {item.fungsi}
          </Text>

          <Text style={styles.info}>
            <Text style={styles.bold}>Efek Samping : </Text>
            {item.efekSamping}
          </Text>

        </View>
      ))}

    </ScrollView>
  );
};

export default MedicineTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2f95baff',
  },

  info: {
    fontSize: 14,
    marginBottom: 5,
  },

  bold: {
    fontWeight: 'bold',
  },
});