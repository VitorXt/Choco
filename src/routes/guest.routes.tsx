import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { CreateSign } from '../screens/Criar-acesso';

const {Navigator,Screen}  = createNativeStackNavigator();

export function GuestRoutes() {
    return (
        <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={SignIn} />
                <Screen name="CreateSign" component={CreateSign} />
        </Navigator>
    )
}