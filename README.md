# react-native-awesome-calculator

Awesome Native calculator in Rust.

## Installation

```sh
npm install react-native-awesome-calculator
```

## Usage


```js
import { execute } from 'react-native-awesome-calculator';

// ...

const add_cmd = JSON.stringify({
    Add: {
        x: 12,
        y: 2
    }
})
const result = JSON.parse(execute(add_cmd));
const sum = result.res
```

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
