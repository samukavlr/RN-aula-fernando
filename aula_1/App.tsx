import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MeuComponent from './MeuComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title} >Meu App</Text>
      <ScrollView>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      <MeuComponent/>
      </ScrollView>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#fff',
    fontSize:24,
    marginBottom:24,
  },
  card:{
    backgroundColor:'#fff',
    padding: 12,
    borderRadius:3,
  },
  cardTitle:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle:{
    color:'#333',
    fontSize:14
  }
});
