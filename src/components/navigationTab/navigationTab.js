import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from '../SharePlaces/SharePlaces';
import FindPlaces from '../FindPlaces/FindPlaces';
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const navigationTab = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Share Places"
                component={SharePlaces}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="share-square-o" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Find Places"
                component={FindPlaces}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="bars" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default navigationTab;