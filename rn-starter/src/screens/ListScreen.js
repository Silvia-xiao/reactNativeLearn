import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', key: '1', age: 22}, //key value must be array and unique
        { name: 'Friend #2', key: '2', age: 22 },
        { name: 'Friend #3', key: '3', age: 22 },
        { name: 'Friend #4', key: '4', age: 22 },
        { name: 'Friend #5', key: '5', age: 22 }
    ];
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            //keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
            return 
                <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
                </Text>
            }}
        />
    );
}

const styles = Styleheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;