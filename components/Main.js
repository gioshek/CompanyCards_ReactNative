import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
    const [news, setNews] = useState([
		{ name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: 'https://i.ytimg.com/vi/NkmEkugXQVA/hqdefault.jpg' },
		{ name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://cdn.salla.sa/jKgRa/phamtVTpfGdjoZHVNzjJlLdFE8eXXD4COP8uIxAu.png' },
		{ name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!', key: '3', img: 'https://expertnov.ru/800/600/https/networkcenter.ru/wp-content/uploads/2020/06/2-3.jpg' },
    ]);

	const [modalWindow, setModalWindow] = useState(false);
	const[styleText, setStyleText] = useState({});
	const pressHandler = () => {
		setStyleText(() => {
			return {color: '#ed4034', fontSize: 32, fontFamily: 'mt-light'};
		})
	}

	const addArticle = (article) => {
		setNews((list) => {
			article.key = Math.random().toString();
			return [
				article,
				...list
			]
		});
		setModalWindow(false);
	}

    return (
		<View style={gStyle.main}>
			<Modal visible={modalWindow} >
				<View style={gStyle.main}>
					<Ionicons name="close-circle" size={34} color="red" style={styles.iconClouse} onPress={() => setModalWindow(false)} />
					<Text style={[styles.title, styleText]}>
						Форма добавления статей
						<TouchableOpacity onPress={pressHandler}>
							<AntDesign name="infocirlce" size={24} style={styles.iconInfo} />
						</TouchableOpacity>
					</Text>
					<Form addArticle={addArticle} />
				</View>
			</Modal>
			<Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
			<Text style={[gStyle.title, styles.header]}>Главная страница</Text>
			<FlatList data={news} renderItem={({item}) => (
				<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
					<Image style={styles.image} source={{uri: item.img}} />
					<Text style={styles.title}>{ item.name }</Text>
					<Text style={styles.anons}>{ item.anons }</Text>
				</TouchableOpacity>
			)} />
		</View>
    );
}

const styles = StyleSheet.create({
	header: {
		marginBottom: 30
	},
	item: {
		width: '100%',
		marginBottom: 30
	},
	title: {
		fontFamily: 'mt-bold',
		fontSize: 22,
		textAlign: 'center',
		marginTop: 20,
		color: '#474747'
	},
	anons: {
		fontFamily: 'mt-light',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 5,
		color: '#474747'
	},
	image: {
		width: '100%',
		height: 200,
	},
	iconAdd: {
		textAlign: 'center',
		marginBottom: 15
	},
	iconClouse: {
		textAlign: 'center',
	},
	iconInfo: {
		marginLeft: 10,
		color: '#ed4034',
		fontSize: 30
	}
});
