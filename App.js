import * as React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Escolhas from './screens/Tdescolhas';
import Calculo1 from './screens/Tdcalculo1';
import Calculo2 from './screens/Tdcalculo2';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}name="Escolha" component={Escolhas} />
        <Stack.Screen options={{headerShown: false}} name="Calculo1" component={Calculo1}/>
        <Stack.Screen options={{headerShown: false}} name="Calculo2" component={Calculo2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
