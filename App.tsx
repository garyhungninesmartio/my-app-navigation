import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeLandingPage from './pages/home';
import DetailsPage from './pages/details';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
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
