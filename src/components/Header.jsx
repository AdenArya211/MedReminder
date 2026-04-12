import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>

      {/* BARIS ATAS */}
      <View style={styles.topRow}>
        <Text style={styles.title}>MedReminder</Text>

        {/* ICON PROFILE */}
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888" />

        <TextInput
          style={styles.search}
          placeholder="Cari obat..."
        />
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },

  search: {
    flex: 1,
    padding: 10,
  },
});