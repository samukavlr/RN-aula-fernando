import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MeuComponent(){
    return (
        <>
         <View style={styles.card}>
        <Text style={styles.cardTitle} >
          React Native
        </Text>
        <Text style={styles.cardSubtitle}>
          Criando aplicações para Android e IOS
        </Text>
      </View>

        </>
    )
}
const styles = StyleSheet.create({
    
    card:{
      backgroundColor:'#fff',
      padding: 12,
      borderRadius:3,
      marginBottom:9,
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