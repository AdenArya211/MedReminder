import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ScheduleItem from '../components/ScheduleItem';
import { scheduleData } from '../data/scheduleData';

const ScheduleScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Jadwal Obat</Text>

      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddSchedule')}
        >
          <Text style={styles.addText}>+ Tambah Jadwal</Text>
        </TouchableOpacity>
      </View>

      {scheduleData.map(item => (
        <ScheduleItem
          key={item.id}
          nama={item.nama}
          dosis={item.dosis}
          waktu={item.waktu}
        />
      ))}

    </ScrollView>
  );
};

export default ScheduleScreen;

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
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#2f95baff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});