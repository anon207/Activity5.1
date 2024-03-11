import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Screen() {
  return(
    <View style={styles.view}>
      <Text style={{color: 'white', fontSize: 20}}>
        Hello
      </Text>
    </View>
  );
}

function Alex() {
  return(
    <View style={styles.view}>
      <Text style={{color: 'white', fontSize: 20}}>
        Yooooo
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Screen/>
      <Alex/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
