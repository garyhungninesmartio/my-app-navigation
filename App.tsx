import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackScreenParams = {
  Home: undefined; // this is our actual screen name, but it doesn't take any props so we give undefined
  Details: {itemID: number};
};

import HomeLandingPage from './pages/home';
import DetailsPage from './pages/details';

const Stack = createNativeStackNavigator<RootStackScreenParams>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeLandingPage} />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={{title: 'My Details'}} // This is the title in the header, not props passed to the actual page component
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
