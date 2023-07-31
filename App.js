import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, BackHandler, View, Text } from 'react-native';

// const OTTERMAP = 'http://localhost:3000/';
//const OTTERMAP = 'http://192.168.29.225:3000/';
const OTTERMAP = 'http://66.94.101.202:3000/';

export default function App() {
  const webViewRef = useRef(null);

  const handleBackButtonPress = () => {
    try {
      webViewRef.current?.goBack();
      return true; // Prevent default behavior
    } catch (err) {
      console.log('[handleBackButtonPress] Error : ', err.message);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonPress
      );
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          ref={webViewRef}
          startInLoadingState
          source={{ uri: OTTERMAP }}
          onLoad={console.log('Loaded')}
        />
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
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
