import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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

<Stack.Navigator>
  <Stack.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{ title: 'Receitas' }} 
  />
  <Stack.Screen 
    name="Receita" 
    component={ReceitaScreen} 
    options={{ title: 'Detalhes da Receita' }} 
  />
</Stack.Navigator>
