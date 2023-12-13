/* eslint-disable prettier/prettier */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native'
import { execute } from 'react-native-awesome-calculator'

const x = 12
const y = 2

console.log("x = ", x)
console.log("y = ", y)

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

const getAnswer = (): string => {
  const ans_cmd = JSON.stringify({ Answer: {} })
  const ans = JSON.parse(execute(ans_cmd))
  console.log("ans = ", ans)
  return ans.res
}

export default function App() {
  const sum = getSum()
  const ans = getAnswer()

  return (
    <View style={styles.container}>
      <Text>Sum: {sum}</Text>
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
