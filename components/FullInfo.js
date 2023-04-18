import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ navigation, route }) {
    // const loadScene1 = () => {
    //   navigation.goBack();
    // }

    const loadScene = () => {
		navigation.navigate('Contacts');
    }

    return (
		<View style={gStyle.main}>
			<Image style={styles.image} source={{uri: route.params.img}} />
			<Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
			<Text style={styles.full}>{route.params.full}</Text>
			<Button title='Связаться с компанией' onPress={loadScene} />
		</View>
    );
}

const styles = StyleSheet.create({
	full: {
		fontFamily: 'mt-light',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 20,
		color: '#f55151',
		marginBottom: 10
	},
	header: {
		fontSize: 25,
		marginTop: 25
	},
	image: {
		width: '100%',
		height: 200,
	}
});
