import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '47%',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});