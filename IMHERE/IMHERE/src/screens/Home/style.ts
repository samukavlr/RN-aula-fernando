import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding:24
    },
    eventName:{
      color:'#FDFCFE',
      fontSize:24,
      fontWeight: 'bold',
      marginTop: 50
    },
    eventDate:{
      color: '#6B6B6B',
      fontSize:18,
    },
    input:{
      flex:1,
      height:56,
      backgroundColor:'#1F1E25',
      borderRadius:4,
      color:'#fff',
      fontSize:14,
      padding:16,
      marginRight:7,
    },
    buttonText:{
      color:'#fff',
      fontSize:24,      
    },
    button:{
      width:56,
      height:56,
      backgroundColor:'#31CF67',
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
    },
    box:{
     marginTop:34,
     width:'100%',
     flexDirection:'row',
     marginBottom:30
    },
    listEmptyText:{
      color:'#fff',
      fontSize: 14,
      textAlign:'center'
    },
    participantsTitle:{
      color:'#fff',
      fontSize:20,
      
    }

  });
  