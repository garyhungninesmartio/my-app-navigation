import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeLandingPage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeLandingPage;
