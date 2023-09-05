import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackScreenParams} from '../../App';

type Props = NativeStackScreenProps<RootStackScreenParams, 'Home'>;

const HomeLandingPage: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate('Details', {itemID: 102})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeLandingPage;
