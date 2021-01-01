import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const hello = 'Hello';
    const hi = <Text>Hi!</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{hello}</Text>
            {hi}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24
    }
})

export default HomeScreen;