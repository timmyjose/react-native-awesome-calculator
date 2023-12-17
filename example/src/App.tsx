/* eslint-disable prettier/prettier */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native'
import { execute } from 'react-native-awesome-calculator'

const x = 120
const y = 24

const getSum = (): string => {
  const add_cmd = JSON.stringify({
    Add: {
      x: x,
      y: y
    }
  })

  const sum = JSON.parse(execute(add_cmd))
  console.log("sum = ", sum);
  return sum.res
}

const getDiff = (): string => {
  const sub_cmd = JSON.stringify({
    Sub: {
      x: x,
      y: y
    }
  })

  const diff = JSON.parse(execute(sub_cmd))
  console.log("diff = ", diff);
  return diff.res
}

const getProd = (): string => {
  const prod_cmd = JSON.stringify({
    Mul: {
      x: x,
      y: y
    }
  })

  const prod = JSON.parse(execute(prod_cmd))
  console.log("prod = ", prod);
  return prod.res
}

const getQuot = (): string => {
  const div_cmd = JSON.stringify({
    Div: {
      x: x,
      y: y
    }
  })

  const quot = JSON.parse(execute(div_cmd))
  console.log("quot = ", quot);
  return quot.res
}


export default function App() {
  const sum = getSum()
  const diff = getDiff()
  const prod = getProd()
  const quot = getQuot()

  return (
    <View style={styles.container}>
      <Text>Sum: {sum}</Text>
      <Text>Difference: {diff}</Text>
      <Text>Product: {prod}</Text>
      <Text>Quotient: {quot}</Text>
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
