import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/loginScreen';
import UserScreen from '../screens/userScreen';
import LessonScreen from '../screens/lessonScreen';
import CoursePlaylistScreen from '../screens/coursePlaylistScreen';
import PanelScreen from '../screens/panelScreen';
import PersonalScreen from '../screens/personalScreen';
import VacantesScreen from '../screens/vacantesScreen';
import NotificationScreen from '../screens/notificationScreen';

export type RootStackParamList = {
    Login: undefined;
    UserScreen: undefined;
    CoursePlaylistScreen: undefined;
    LessonScreen: undefined;
    panelScreen: undefined;
    PersonalScreen: undefined;
    VacantesScreen: undefined;
    NotificationScreen: undefined;
    Details: { itemId: number; otherParam?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NotificationScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="CoursePlaylistScreen" component={CoursePlaylistScreen} />
                <Stack.Screen name="LessonScreen" component={LessonScreen} />
                <Stack.Screen name="panelScreen" component={PanelScreen} />
                <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
                <Stack.Screen name="VacantesScreen" component={VacantesScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
