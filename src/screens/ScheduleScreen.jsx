import React, {
  useRef,
  useState,
  useCallback,
} from 'react';

import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import ScheduleItem from '../components/ScheduleItem';
import { supabase } from '../services/supabase';

const ScheduleScreen = ({ navigation }) => {

  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  const getSchedules = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('schedule')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.log('GET ERROR:', error.message);
      Alert.alert('Error', 'Gagal mengambil data');
    } else {
      setSchedules(data);
    }

    setLoading(false);
  };

  const deleteSchedule = async (id) => {
    const { error } = await supabase
      .from('schedule')
      .delete()
      .eq('id', id);

    if (error) {
      console.log('DELETE ERROR:', error.message);
      Alert.alert('Error', 'Gagal menghapus data');
    } else {
      Alert.alert('Berhasil', 'Data berhasil dihapus');
      getSchedules();
    }
  };

  const handleDelete = (id, nama) => {
    Alert.alert(
      'Hapus Jadwal',
      `Yakin ingin menghapus ${nama}?`,
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => deleteSchedule(id),
        },
      ]
    );
  };

  const handleEdit = (item) => {
    navigation.navigate('EditSchedule', { item });
  };

  useFocusEffect(
    useCallback(() => {
      getSchedules();

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Jadwal Obat</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddSchedule')}
      >
        <Text style={styles.addText}>+ Tambah Jadwal</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#2f95baff" />
      ) : (
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          {schedules.map(item => (
            <TouchableOpacity
              key={String(item.id)}
              onPress={() => handleEdit(item)}
              onLongPress={() => handleDelete(item.id, item.nama)}
            >
              <ScheduleItem
                nama={item.nama}
                dosis={item.dosis}
                waktu={item.waktu}
              />
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}

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
    marginBottom: 15,
  },

  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});