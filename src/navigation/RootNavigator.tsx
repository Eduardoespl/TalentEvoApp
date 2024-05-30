// navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/loginScreen';
import UserScreen from '../screens/userScreen';
import LessonScreen from '../screens/lessonScreen';
import CoursePlaylistScreen from '../screens/coursePlaylistScreen';
import PanelScreen from '../screens/panelScreen';

export type RootStackParamList = {
    Login: undefined;
    UserScreen: undefined;
    CoursePlaylistScreen: undefined;
    LessonScreen: undefined;
    panelScreen: undefined;
    Details: { itemId: number; otherParam?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="panelScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="CoursePlaylistScreen" component={CoursePlaylistScreen} />
                <Stack.Screen name="LessonScreen" component={LessonScreen} />
                <Stack.Screen name="panelScreen" component={PanelScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
