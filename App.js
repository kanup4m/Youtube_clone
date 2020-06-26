import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { reducer } from './src/reducers/reducer'
import { themeReducer } from './src/reducers/themeReducer'
import { Provider, useSelector } from 'react-redux'
import { createStore, combineReducers } from 'redux'



const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "#c4302b",
    headerColor: "black"
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red",
    headerColor: "white"
  }
}

const rooReducer = combineReducers({
  cardData: reducer, //[],
  myDarkMode: themeReducer//false
})
const store = createStore(rooReducer)



const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const RootHome = () => {
  const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
}


export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )

}


export function Navigation() {

  let currentTheme = useSelector(state => {
    return state.myDarkMode
  })
  return (
    <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



