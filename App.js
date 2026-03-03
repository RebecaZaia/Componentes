import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: Rebeca Alice Garcia Zaia - INFO 5A</Text>
        
      <View style={styles.redBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blueBox} />

      <Text style={styles.link}>https://github.com/RebecaZaia/Componentes</Text>
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
  link: {
    flexContent: 'center',
    fontSize: 10,
  },
  texto: {
    marginLeft: -120,
    marginBottom: 5,
    fontSize: 15,
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
