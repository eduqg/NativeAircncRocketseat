import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, AsyncStorage, Platform, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../services/api';
export default function SpotList({ tech }) {
  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech }
      })

      console.log(response.data)
    }
    loadSpots();
  }, []);

  return <Text>{tech}</Text>
}