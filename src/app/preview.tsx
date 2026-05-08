import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<{
    nome: string; cargo: string; empresa: string; anos: string; tecnologia: string; cor: string;
  }>();

  const exp = Number(anos || 0);
  
  // Lógica de Nível
  let nivel = '';
  let corBadge = '';
  if (exp <= 2) {
    nivel = 'Júnior';
    corBadge = '#9ca3af'; // Cinza
  } else if (exp <= 5) {
    nivel = 'Pleno';
    corBadge = '#3b82f6'; // Azul
  } else {
    nivel = 'Sênior';
    corBadge = '#fbbf24'; // Dourado
  }

  // Lógica de Cor do Cartão
  let bgCor = '#3b82f6'; 
  if (cor === 'Verde') bgCor = '#10b981';
  if (cor === 'Roxo') bgCor = '#8b5cf6';

  const primeiraLetra = nome ? nome.charAt(0).toUpperCase() : '?';

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: bgCor }]}>
        <View style={styles.avatar}>
          <Text style={[styles.avatarText, { color: bgCor }]}>{primeiraLetra}</Text>
        </View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        {empresa ? <Text style={styles.empresa}>{empresa}</Text> : null}

        <View style={styles.divider} />

        <Text style={styles.especialistaLabel}>Especialista em</Text>
        <Text style={styles.tecnologia}>{tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: corBadge }]}>
          <Text style={styles.badgeText}>{nivel}</Text>
        </View>
        <Text style={styles.anosText}>{anos} anos de experiência</Text>
      </View>

      <TouchableOpacity style={styles.btnSecondary} onPress={() => router.back()}>
        <Text style={styles.btnSecondaryText}>Editar dados</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnPrimary} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.btnPrimaryText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  card: { borderRadius: 20, padding: 30, alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, marginBottom: 40 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 36, fontWeight: 'bold' },
  nome: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  cargo: { fontSize: 14, color: 'rgba(255,255,255,0.8)' },
  empresa: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 },
  divider: { width: '80%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 20 },
  especialistaLabel: { fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 5 },
  tecnologia: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  badge: { paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, marginBottom: 10 },
  badgeText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  anosText: { fontSize: 10, color: 'rgba(255,255,255,0.6)' },
  btnPrimary: { backgroundColor: '#7c3aed', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 10 },
  btnPrimaryText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  btnSecondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#7c3aed', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  btnSecondaryText: { color: '#7c3aed', fontSize: 16, fontWeight: 'bold' }
});