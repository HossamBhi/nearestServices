import React from "react";
import HomePage from "../pages/HomePage";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../pages/Categories";

import TabItem from "./TabItem";
import Profile from "../pages/profileModule/Profile";
import Cart from "../pages/Cart";

const TabArr = [
  {
    route: "HomePage",
    label: "Home",
    typeActive: Ionicons,
    typeInActive: Ionicons,
    activeIcon: "home",
    inActiveIcon: "home-outline",
    component: HomePage,
  },
  {
    route: "Categories",
    label: "Categories",
    typeActive: MaterialIcons,
    typeInActive: AntDesign,
    activeIcon: "explore",
    inActiveIcon: "find",
    component: Categories,
  },
  //   {
  //     route: "Categories",
  //     label: "Categories",
  //     typeActive: Ionicons,
  //     typeInActive: Ionicons,
  //     activeIcon: "grid",
  //     inActiveIcon: "grid-outline",
  //     component: Categories,
  //   },
  //   {
  //     route: "Like",
  //     label: "Like",
  //     type: MaterialCommunityIcons,
  //     activeIcon: "heart-plus",
  //     inActiveIcon: "heart-plus-outline",
  //     component: Profile,
  //   },
  //   {
  //     route: "Search",
  //     label: "Search",
  //     type: MaterialCommunityIcons,
  //     activeIcon: "timeline-plus",
  //     inActiveIcon: "timeline-plus-outline",
  //     component: Profile,
  //   },
  {
    route: "Cart",
    label: "Cart",
    typeActive: Ionicons,
    typeInActive: Ionicons,
    activeIcon: "cart",
    inActiveIcon: "cart-outline",
    component: Cart,
  },
  {
    route: "Profile",
    label: "Profile",
    typeActive: FontAwesome,
    typeInActive: FontAwesome,
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 60,
        //   position: "absolute",
        //   bottom: 16,
        //   right: 16,
        //   left: 16,
        //   borderRadius: 16,
      },
    }}
  >
    {TabArr.map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabItem {...props} item={item} />,
          }}
        />
      );
    })}
  </Tab.Navigator>
);

export default Tabs;
