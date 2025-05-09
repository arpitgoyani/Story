import React, { useEffect } from 'react';
import {
  View,
  LogBox,
  ViewStyle
} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Addnew from './src/View/Addnew';
import StoryEdit from './src/View/StoryEdit';
import Home from './src/View/Home';
import StoryComponent from './src/View/StoryComponent';

const Stack = createStackNavigator()

function App() {

  useEffect(() => {
    // Ignore all log notifications
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <View
      style={Container}
    >
      <View style={{ height: '100%' }} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}
          >

            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Addnew" component={Addnew} options={{ headerShown: false, gestureDirection: 'horizontal-inverted' }} />
            <Stack.Screen name="StoryEdit" component={StoryEdit} options={{ headerShown: false }} />
            <Stack.Screen name="StoryComponent" component={StoryComponent}
              options={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
                gestureEnabled: true,
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const Container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white'
}

export default App;
