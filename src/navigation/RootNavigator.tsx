import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../screens/loginScreen';
import UserScreen from '../screens/userScreen';
import LessonScreen from '../screens/lessonScreen';
import CoursePlaylistScreen from '../screens/coursePlaylistScreen';
import PanelScreen from '../screens/panelScreen';
import PersonalScreen from '../screens/personalScreen';
import VacantesScreen from '../screens/vacantesScreen';
import NotificationScreen from '../screens/notificationScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Panel':
                            iconName = 'pie-chart';
                            break;
                        case 'Personal':
                            iconName = 'person';
                            break;
                        case 'Vacantes':
                            iconName = 'email';
                            break;
                        case 'Notifications':
                            iconName = 'notifications';
                            break;
                        default:
                            iconName = 'circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false, // Ocultar el texto de los tabs
                tabBarActiveTintColor: '#FF824A',
                tabBarInactiveTintColor: '#D1D0D7',
                tabBarStyle: {
                    backgroundColor: '#29282F', // Color de la barra de navegación inferior
                },
                headerShown: false, // Ocultar el header en el tab navigator
            })}
        >
            <Tab.Screen name="Panel" component={PanelScreen} />
            <Tab.Screen name="Personal" component={PersonalScreen} />
            <Tab.Screen name="Vacantes" component={VacantesScreen} />
            <Tab.Screen name="Notifications" component={NotificationScreen} />
        </Tab.Navigator>
    );
}

export type RootStackParamList = {
    Login: undefined;
    UserScreen: undefined;
    CoursePlaylistScreen: undefined;
    LessonScreen: undefined;
    panelScreen: undefined;
    PersonalScreen: undefined;
    VacantesScreen: undefined;
    NotificationScreen: undefined;
    Main: undefined;
    Details: { itemId: number; otherParam?: string };
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="CoursePlaylistScreen" component={CoursePlaylistScreen} />
                <Stack.Screen name="LessonScreen" component={LessonScreen} />
                <Stack.Screen name="panelScreen" component={PanelScreen} />
                <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
                <Stack.Screen name="VacantesScreen" component={VacantesScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="Main" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
