import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Counter = () => {
  // Step 4: Define the state for the counter
  const [count, setCount] = useState(0);

  // Step 5: Create functions to modify the state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increment} />
        <Button title="Decrease" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};
export default Counter;
// Step 6: Create basic styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

