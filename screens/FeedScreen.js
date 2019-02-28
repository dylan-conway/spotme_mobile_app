import React from 'react';
import {
    Image,
    Text,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

export default class FeedScreen extends React.Component {
    static navigationOptions = {
        title: 'My feed',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'crimson',
    },
});