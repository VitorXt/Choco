import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabsRoutes } from "./tab.routes";
import { DetailsGroup } from "../screens/Detalhes-grupo";

const {Navigator,Screen}  = createNativeStackNavigator();

export function AuthenticatedRoutes() {
    return (
        <Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false}}>
            <Screen
                name="Tabs"
                component={TabsRoutes}
            />
            <Screen
                name="DetailsGroup"
                component={DetailsGroup}
            />
        </Navigator>
    )
}