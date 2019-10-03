import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Aircnc!</Text>
      <Text>Hello Aircnc!</Text>
    </View>
  );
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
