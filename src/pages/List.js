import React, { useState, useEffect } from 'react';
import { View, Text, Image, AsyncStorage, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})