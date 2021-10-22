import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  StyleSheet, 
  SafeAreaView, 
  StatusBar
} from 'react-native';

import { TaskScreen } from './screens/TaskScreen';

// create a navifation stack
const Stack = createNativeStackNavigator();

export default function App () {
  console.log(DarkTheme)
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    paddingTop: StatusBar.currentHeight,
  }
});
