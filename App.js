import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: Rebeca Alice Garcia Zaia - INFO 5A</Text>
        
      <View style={styles.redBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blueBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#dadada',
    alignItems: 'center',
  },
  texto: {
  },
  redBox: {
    width: 400,
    height: 85,
    backgroundColor: '#AE1C28',
  },
    whiteBox: {
    width: 400,
    height: 85,
    backgroundColor: '#FFFFFF',
  },
  blueBox: {
    width: 400,
    height: 85,
    backgroundColor: '#21468B',
  },
});
