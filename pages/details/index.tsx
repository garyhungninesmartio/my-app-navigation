import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DetailsPage = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DetailsPage;
