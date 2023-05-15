import { View, Text, Pressable, ViewStyle } from "react-native";
import React from "react";
import {
  ParamListBase,
  TabNavigationState,
  NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "../common/icons/HomeIcon";
import SvgIcon from "../common/icons";

interface Props {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

interface LabelProps {
  focused: boolean;
  color: string;
  children:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
}

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: Props) {
  const insets = useSafeAreaInsets();
  // Adjust the position of the tab bar to avoid overlapping with the gesture line
  const tabBarStyle: ViewStyle = { paddingBottom: insets.bottom };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#000000",
        ...tabBarStyle,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={label}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <SvgIcon
              icon={label.toLowerCase()}
              size={30}
              fill={isFocused ? "#9E86FE" : "#55565B"}
            />
            <Text
              style={{
                color: isFocused ? "#9E86FE" : "#55565B",
                fontWeight: "500",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
