import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>a. Seu Nome Completo: Rebeca Alice Garcia Zaia</Text>
      <Text>b. Sua Matrícula: 40028922</Text>
      <Text>c. Seu Curso: Informática</Text>
      <Text>d. Sua data de ingresso: 2024</Text>
      
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  }
});
