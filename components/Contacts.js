import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default function Contacts({ navigation }) {
	const loadScene = () => {
		navigation.navigate('Main');
	}

	return (
		<View style={styles.main}>
			<Formik initialValues={{name: '', email: '', message: ''}} onSubmit={(values) => {
                alert("Данные: " + values.name + ". Email: " + values.email + ". Текст сообщения: " + values.message + ". Ваше сообщение было отправлено в компанию!!!");
            }}>
                {(props) => (
                    <View>
                        <TextInput placeholder='Введите имя' value={props.values.name} style={styles.input} onChangeText={props.handleChange('name')} />
                        <TextInput placeholder='Введите email' value={props.values.email} style={styles.input} onChangeText={props.handleChange('email')} />
                        <TextInput placeholder='Введите сообщение' value={props.values.message} multiline style={styles.input} onChangeText={props.handleChange('message')} />
                        <Button title='Отправить' onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
			<View style={styles.btn}>
                <Button title='На главную' onPress={loadScene} />
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5,
        marginBottom: 10
    },
    btn: {
        marginTop: 10
    },
    main: {
        flex: 1,
        padding: 20,
    }
})