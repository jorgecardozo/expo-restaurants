import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Restaurants from '../screeens/restaurants/Restaurants'
import AddRestaurant from '../screeens/restaurants/AddRestaurant'

const Stack = createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"
                component={Restaurants}
                options={{title: "Retaurantes"}}
            />
            <Stack.Screen
                name="add-restaurant"
                component={AddRestaurant}
                options={{title: "Crear Retaurante"}}
            />
        </Stack.Navigator>
    )
}
