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

const ScheduleScreen = ({ navigation }) => {

  // API URL
  const API_URL =
    'https://6a0192ec36fb6ad04de12f3a.mockapi.io/schedule';

  // STATE
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  // ANIMATION
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  // GET API
  const getSchedules = async () => {

    try {

      const response = await fetch(API_URL);

      const data = await response.json();

      setSchedules(data);

    } catch (error) {

      console.log('GET ERROR:', error);

    } finally {

      setLoading(false);

    }
  };

  // DELETE API
  const deleteSchedule = async (id) => {

    try {

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: 'DELETE',
        }
      );

      const result = await response.json();

      console.log('DELETE RESULT:', result);

      getSchedules();

    } catch (error) {

      console.log('DELETE ERROR:', error);

    }
  };

  // HANDLE DELETE
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
          onPress: async () => {
            await deleteSchedule(id);
          },
        },
      ]
    );
  };

  // HANDLE EDIT
  const handleEdit = (item) => {

    navigation.navigate(
      'EditSchedule',
      { item }
    );
  };

  // REFRESH SCREEN
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

      <Text style={styles.title}>
        Jadwal Obat
      </Text>

      {/* BUTTON TAMBAH */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddSchedule')
        }
      >
        <Text style={styles.addText}>
          + Tambah Jadwal
        </Text>
      </TouchableOpacity>

      {/* LOADING */}
      {loading ? (

        <ActivityIndicator
          size="large"
          color="#2f95baff"
        />

      ) : (

        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [
              { translateY: slideAnim }
            ],
          }}
        >

          {Array.isArray(schedules) &&
            schedules.map(item => (

              <TouchableOpacity
                key={String(item.id)}

                // TEKAN BIASA = EDIT
                onPress={() =>
                  handleEdit(item)
                }

                // TEKAN LAMA = DELETE
                onLongPress={() =>
                  handleDelete(
                    String(item.id),
                    item.nama
                  )
                }
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