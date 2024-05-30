// navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/loginScreen';
import UserScreen from '../screens/userScreen';
import LessonScreen from '../screens/lessonScreen';
import CoursePlaylistScreen from '../screens/coursePlaylistScreen';

type RootStackParamList = {
    Login: undefined;
    UserScreen: undefined;
    LessonScreen: undefined;
    CoursePlaylistScreen: undefined;
    Details: { itemId: number; otherParam?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="LessonScreen" component={LessonScreen} />
                <Stack.Screen name="CoursePlaylistScreen" component={CoursePlaylistScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
