import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';
import Contacts from './components/Contacts';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title: 'Главная',
                        headerStyle: { backgroundColor: '#b02929', height: 100 },
                        headerTitleStyle: { 
							fontWeight: '400'
						},
						headerTitleAlign: 'center'
                    }
                }
                />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title: 'Статья', headerTitleAlign: 'center'}}
                />
			<Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{title: 'Контакты', headerTitleAlign: 'center'}}
                />	
			
        </Stack.Navigator>
    </NavigationContainer>;
}