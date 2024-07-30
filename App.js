import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Main from './src/components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}


