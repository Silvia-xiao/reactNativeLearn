import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

// Also we dont need to pass the whole props object.
// we can just use navigation
const HomeScreen = ({ navigation }) => {

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
    <Button
      onPress={() => navigation.navigate('Image')}
      //if asign string value, we can just use double quotes
      title="Go to Image screen"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      //if asign string value, we can just use double quotes
      title="Go to Counter Demo"
    />
    <Button
      onPress={() => navigation.navigate('Color')}
      //if asign string value, we can just use double quotes
      title="Go to Color Demo"
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      //if asign string value, we can just use double quotes
      title="Go to Square Demo"
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      //if asign string value, we can just use double quotes
      title="Go to Text Demo"
    />
    <Button
      onPress={() => navigation.navigate('Box')}
      //if asign string value, we can just use double quotes
      title="Go to Box Demo"
    />
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
