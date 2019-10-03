import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes.js';

export default function App() {
  return <Routes />;
}

// Toda estilização do react já é display:flex e flexDirection: column
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { rotateZ: '50deg' }
    ]
  },
});
