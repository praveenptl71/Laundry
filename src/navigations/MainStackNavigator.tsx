import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { AddDetailsScreen } from "../screens/AddDetails";
import { CartScreen } from "../screens/Cart";
import { DeliveryScreen } from "../screens/Delivery";
import { HomeScreen } from "../screens/Home";
import { LaundriesScreen } from "../screens/Laundries";
import { LoginScreen } from "../screens/Login";
import { OffersScreen } from "../screens/Offers";
import { PackageScreen } from "../screens/Package";
import { PaymentScreen } from "../screens/Payment";
import { ProfileScreen } from "../screens/Profile";
import { RegisterScreen } from "../screens/Register";
import { SearchScreen } from "../screens/Search";
import { SettingScreen } from "../screens/Setting";
import { WelcomeScreen } from "../screens/Welcome";
import { DrawerContent } from "../components/DrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ width: '80%', elevation:10 }}
            drawerContent={(props) => (<DrawerContent {...props} />)}
            // openByDefault={true}
        >
            <Drawer.Screen name="AddDetails" component={AddDetailsScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
            <Drawer.Screen name="Delivery" component={DeliveryScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Laundries" component={LaundriesScreen} />
            <Drawer.Screen name="Offers" component={OffersScreen} />
            <Drawer.Screen name="Package" component={PackageScreen} />
            <Drawer.Screen name="Payment" component={PaymentScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Signup" component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="main-drawer" component={MainDrawerNavigation} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };