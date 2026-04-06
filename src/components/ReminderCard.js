import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Komponen ReminderCard menerima props dari App.js
const ReminderCard = ({ image, text }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ReminderCard;

// Style khusus komponen ini
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: '#666',
  },
});