import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import TopRestaurants from '../screeens/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="top-restaurants"
                component={TopRestaurants}
                options={{title: "Los Mejores Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
