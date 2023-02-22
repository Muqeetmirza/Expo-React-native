import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import {  Text, View, SafeAreaView, StyleSheet } from 'react-native';

const App=() =>{
  return(
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
      <Text>
        hey universe!!!!
      </Text>
    </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    
    //marginVertical:40,
    backgroundColor :'pink',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  safearea:{
    flex:2,
  }
})

export default App;