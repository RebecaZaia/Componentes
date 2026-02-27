import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>a. Seu Nome Completo: Rebeca Alice Garcia Zaia</Text>
      <Text>b. Sua Matrícula: 40028922</Text>
      <Text>c. Seu Curso: Informática</Text>
      <Text>d. Sua data de ingresso: 2024</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
