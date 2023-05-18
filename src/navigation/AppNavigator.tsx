import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
import DetailScreen from "../screens/DetailScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import NoteScreen from "../screens/NoteScreen";
import StarredScreen from "../screens/StarredScreen";

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const AppNavigator = ({ theme }: any) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Bottom"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Notes" component={NoteScreen} />
        <Stack.Screen name="Starred" component={StarredScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
