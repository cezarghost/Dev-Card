import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Azul');
  
  const [erros, setErros] = useState<Record<string, string>>({});

  const validarENavegar = () => {
    let novosErros: Record<string, string> = {};

    if (nome.trim().length < 3) novosErros.nome = 'Nome deve ter no mínimo 3 caracteres.';
    if (!cargo.trim()) novosErros.cargo = 'Cargo é obrigatório.';
    if (!anos || isNaN(Number(anos)) || Number(anos) <= 0) novosErros.anos = 'Insira um número válido maior que 0.';
    if (!tecnologia.trim()) novosErros.tecnologia = 'Tecnologia é obrigatória.';

    setErros(novosErros);

    // Navega passando os parâmetros se não houver erros
    if (Object.keys(novosErros).length === 0) {
      router.push({
        pathname: '/preview',
        params: { nome, cargo, empresa, anos, tecnologia, cor },
      });
    }
  };

  const cores = ['Azul', 'Verde', 'Roxo'];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.headerTitle}>Preencha seus dados de dev</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: João Silva" />
      {erros.nome && <Text style={styles.error}>{erros.nome}</Text>}

      <Text style={styles.label}>Cargo</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} placeholder="Ex: Desenvolvedor Mobile" />
      {erros.cargo && <Text style={styles.error}>{erros.cargo}</Text>}

      <Text style={styles.label}>Empresa (opcional)</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} placeholder="Ex: Tech Solutions" />

      <Text style={styles.label}>Anos de experiência</Text>
      <TextInput 
        style={styles.input} 
        value={anos} 
        onChangeText={setAnos} 
        keyboardType="numeric" 
        placeholder="Ex: 4" 
      />
      {erros.anos && <Text style={styles.error}>{erros.anos}</Text>}

      <Text style={styles.label}>Tecnologia favorita</Text>
      <TextInput style={styles.input} value={tecnologia} onChangeText={setTecnologia} placeholder="Ex: React Native" />
      {erros.tecnologia && <Text style={styles.error}>{erros.tecnologia}</Text>}

      <Text style={styles.label}>Cor do cartão</Text>
      <View style={styles.colorRow}>
        {cores.map(c => (
          <TouchableOpacity 
            key={c} 
            style={[styles.colorButton, cor === c && styles.colorButtonSelected]}
            onPress={() => setCor(c)}
          >
            <View style={[styles.colorDot, { backgroundColor: c === 'Azul' ? '#3b82f6' : c === 'Verde' ? '#10b981' : '#8b5cf6' }]} />
            <Text style={styles.colorText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={validarENavegar}>
        <Text style={styles.submitButtonText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  headerTitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  label: { fontSize: 12, fontWeight: 'bold', color: '#333', marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16 },
  error: { color: 'red', fontSize: 12, marginTop: 4 },
  colorRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  colorButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginHorizontal: 4 },
  colorButtonSelected: { borderColor: '#7c3aed', borderWidth: 2 },
  colorDot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  colorText: { fontSize: 14, color: '#333' },
  submitButton: { backgroundColor: '#7c3aed', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 40 },
  submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});