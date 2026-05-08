import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.iconWrapper}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>
        <Text style={styles.title}>Cartão criado</Text>
        <Text style={styles.title}>com sucesso!</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital está pronto.</Text>
        <Text style={styles.subtitle}>Compartilhe com a galera!</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>Criar outro cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'space-between' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  iconWrapper: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#10b981', justifyContent: 'center', alignItems: 'center', marginBottom: 30, borderWidth: 10, borderColor: '#d1fae5' },
  checkIcon: { fontSize: 50, color: '#fff', fontWeight: 'bold' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#6b7280', textAlign: 'center', marginTop: 10 },
  button: { backgroundColor: '#7c3aed', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});