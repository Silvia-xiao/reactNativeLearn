import React from "react";
import { Text, StyleSheet,View, Button } from "react-native";

// Also we dont need to pass the whole props object.
// we can just use navigation
const HomeScreen = ({ navigation }) => {
  console.log(props.navigation);

  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    
    <Button
      onPress={() => navigation.navigate('Components')}
      //if asign string value, we can just use double quotes
      title="Go to components Demo"/>
    <Button
      title="Go to list Demo"
      onPress={() => navigation.navigate('List')}
    />
    <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
      {/* it will add the fade out effect */}
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
