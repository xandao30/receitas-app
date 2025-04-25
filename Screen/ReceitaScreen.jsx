import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Text, Title, Paragraph, Divider } from 'react-native-paper';

export default function ReceitaScreen({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image source={{ uri: receita.imagem }} style={{ width: '100%', height: 200, borderRadius: 8 }} />
      <Title style={{ marginTop: 10 }}>{receita.nome}</Title>
      <Paragraph>⏱ {receita.tempoPreparo} | 🍽 {receita.porcoes} porções</Paragraph>

      <Divider style={{ marginVertical: 10 }} />
      <Text style={{ fontWeight: 'bold' }}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Divider style={{ marginVertical: 10 }} />
      <Text style={{ fontWeight: 'bold' }}>Modo de Preparo:</Text>
      {receita.modoPreparo.map((passo, index) => (
        <Text key={index}>{passo}</Text>
      ))}
    </ScrollView>
  );
}


  