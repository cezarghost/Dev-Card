import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>🪪</Text>
        </View>
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Aplicações Móveis - Aula 7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'space-between' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  iconPlaceholder: { backgroundColor: '#7c3aed', padding: 20, borderRadius: 16, marginBottom: 20 },
  iconText: { fontSize: 40 },
  title: { fontSize: 40, fontWeight: 'bold', color: '#7c3aed', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center' },
  button: { backgroundColor: '#7c3aed', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  footerText: { textAlign: 'center', color: '#aaa', fontSize: 12, marginBottom: 20 }
});