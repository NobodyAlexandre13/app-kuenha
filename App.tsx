import { ActivityIndicator, View } from 'react-native';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium,
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import CreateInfro from './src/screen/CreateInfro';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return(
      <View>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    )
  }

  return (
    <CreateInfro />
  );
}