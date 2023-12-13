/* eslint-disable prettier/prettier */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native'
import { add, sub, mul, div, answer } from 'react-native-awesome-calculator'

const x = 12
const y = 2

const sum = add(x, y)
const diff = sub(x, y)
const prod = mul(x, y)
const quot = div(x, y)
const ans = answer();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sum: {sum}</Text>
      <Text>Difference: {diff}</Text>
      <Text>Product: {prod}</Text>
      <Text>Quotient: {quot}</Text>
      <Text>Answer: {ans}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
