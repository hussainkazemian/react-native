import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text} from 'react-native';

const App =() => {
  console.log('App loading soon ...!');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hybrid app!</Text>
      <Text>Soon lunching ...</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});

export default App;
