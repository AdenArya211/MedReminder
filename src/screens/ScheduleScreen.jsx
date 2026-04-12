import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

import ScheduleItem from '../components/ScheduleItem';
import { scheduleData } from '../data/scheduleData';

const ScheduleScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Jadwal Obat</Text>

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
});