import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ReminderCard = ({ image, text }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  container: {
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