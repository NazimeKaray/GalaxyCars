import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeProvider } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { View } from 'react-native-web';
import { store } from '../Storage/store';

export default function HomeScreen() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
            <text>
                hevi buyuksun
            </text>
            <statusbar style="auto"/>
        </View>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});