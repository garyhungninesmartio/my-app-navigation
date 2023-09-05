import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackScreenParams} from '../../App';

type Props = NativeStackScreenProps<RootStackScreenParams, 'Details'>;
const DetailsPage: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      {/*We are already on a page called Details, the only way to navigate again is to push */}
      <Button
        title={'Go to Details ... AGAIN'}
        onPress={() => navigation.push('Details')}
      />
      {/*No matter how many details page is pushed to stack, this will return to the home page*/}
      <Button title={'Go Home'} onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DetailsPage;
