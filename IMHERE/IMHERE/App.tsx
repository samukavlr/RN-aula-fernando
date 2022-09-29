import {Home} from './src/screens/Home'
import { StatusBar } from 'react-native';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,

} from '@expo-google-fonts/roboto'


export default function App( ){
  const [fontsLoaded]=useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,

  })



  return (  
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Home />
    </>
  );
}

