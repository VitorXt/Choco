import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from '../context/auth';
import { TabsRoutes } from './tab.routes';
import { GuestRoutes } from './guest.routes';
import { AuthenticatedRoutes } from './authenticated.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


function AuthStack(){
    const { signed } = useContext(AuthContext)

    const routes = signed ? <AuthenticatedRoutes /> :  <GuestRoutes />

    return routes;
}

export type StackProps = {
    CreateSign : undefined,
    SignIn: undefined,
    DetailsGroup : undefined,
    TabsRoutes: undefined,
    Home: undefined,
    Grupos: undefined
}
export type StackTypes = NativeStackNavigationProp<StackProps>;

export function Routes() {
    return (
            <NavigationContainer>
               <AuthProvider>
                    <AuthStack />
                </AuthProvider>
            </NavigationContainer>
    )
}