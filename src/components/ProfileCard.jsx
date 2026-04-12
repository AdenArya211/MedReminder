import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileCard = ({ nama, umur, email }) => {
  return (
    <View style={styles.card}>
      <Text>Nama: {nama}</Text>
      <Text>Umur: {umur}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
});