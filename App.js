import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

const GOOGLE = 'https://www.google.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View style={{ width: 300, height: 300 }}>
        <WebView source={{ url: GOOGLE }} onLoad={console.log('Loaded')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
