import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "../screens/SignUp"
import { COLORS, icons } from "../constants";
import Home from "../screens/Home";
import Scan from "../screens/Scan";

const Tab = createBottomTabNavigator();


const PopUpButton = (props) => {
    const {icon} = props
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                height: 70,
                borderRadius: 70,
                top:-30,
                backgroundColor: COLORS.primary,
                borderWidth:6,
                borderColor:"rgba(168,220,190,1)"
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    tintColor:COLORS.white
                }}
            />
        </View>
    );
};

const Tabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="More"
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: "10%",
                },
            }}
            screenOptions={({ route }) => ({
                tabBarStyle: { 
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 11,
                    elevation: 24,
                    backgroundColor: '#fff',
                    bottom: 0,
                    padding: 10,
                    width: '100%',
                    height: 84,
                    zIndex: 0,
                },
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "More":
                            return (
                                focused ? 
                                (
                                <PopUpButton
                                    icon = {icons.more}
                                />
                                ) : 
                                    <Image
                                    source={icons.more}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                                
                                
                            );
                        case "Scan":
                            return (
                                focused ? 
                                (
                                <PopUpButton
                                    icon = {icons.scan}
                                />
                                ) :
                                <Image
                                    source={icons.scan}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        
                        
                        case "User":
                            return (
                                focused ? 
                                (
                                <PopUpButton
                                    icon = {icons.user}
                                />
                                ) :
                                <Image
                                    source={icons.user}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="More"
                component={Home}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
            />
            
            <Tab.Screen
                name="User"
                component={Home}
            />
        </Tab.Navigator>
    );
};

export default Tabs;