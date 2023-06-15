import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

const GOOGLE = 'https://dev.ottermap.com';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView source={{ uri: GOOGLE }} onLoad={console.log('Loaded')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#222',
    justifyContent: 'center',
  },
});
