import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Details from "./pages/Details";

const MainIcon = ({ tintColor }) => (
  <Icon name="home" size={20} color={tintColor} />
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: createStackNavigator(
        { Main, Details },
        {
          navigationOptions: {
            tabBarIcon: MainIcon
          },
          headerLayoutPreset: "center"
        }
      ),
      Cart
    },
    {
      initialRouteName: "Main",
      tabBarOptions: {
        activeTintColor: "#ee7777",
        showLabel: false
      }
    }
  )
);

export default Routes;
