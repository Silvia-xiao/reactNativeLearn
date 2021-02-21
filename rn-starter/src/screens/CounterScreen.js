import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, ActionSheetIOS} from 'react-native';

const reducer = (state, action) => {
    //stage === { count: number}
    //action === { type: 'increment' || 'decrement', payload: 1 }
    switch (action.type){
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
};

const CounterScreen = () =>{
    //let counter = 0;//this is not  correct
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: 10 })
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement', payload: 10 })
            }}/>
            <Text>
                Current Count: {state.count}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;