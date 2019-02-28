import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'My Profile',
    };

    render() {
        return (
            <View style={styles.bioContainter}>
                <Text style={styles.bioText}>Bio: My name is Noah and I can bench 250lb.</Text>
                <Text style={styles.bioText}>Kebin was here.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bioContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    bioText: {
        fontSize: 40,
    },
});