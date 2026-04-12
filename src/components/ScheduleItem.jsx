import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleItem = ({ nama, dosis, waktu }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{nama}</Text>
      <Text style={styles.text}>{dosis}</Text>
      <Text style={styles.time}>{waktu}</Text>
    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 3
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  text: {
    color: '#555'
  },
  time: {
    marginTop: 5,
    color: '#43A047',
    fontWeight: 'bold'
  }
});