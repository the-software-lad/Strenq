import { useAppThemeColor } from '@/theme/app-theme';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { BottomTabBarButtonProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { Platform, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const nativeTabs = Platform.OS === "ios";

function CreateTabButton({ onPress }: BottomTabBarButtonProps) {
  return (
    <Pressable
      className="flex-1 items-center justify-center"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Create Workout"
    >
      <View className="-mt-5 h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg">
        <Feather name="plus" color="white" size={27} />
      </View>
    </Pressable>
  );
}

export default function TabLayout() {
    const primary = useAppThemeColor("primary");
    const mutedForeground = useAppThemeColor("mutedForeground");
    const backgroundColor = useAppThemeColor("tabBackground");
    const insets = useSafeAreaInsets();
    const border = useAppThemeColor("border");
  if(nativeTabs){
    return;
  }
  else{
    return(
        <Tabs screenOptions={{
                headerShown:false,
                tabBarActiveTintColor : primary,
                tabBarInactiveTintColor : mutedForeground,
                tabBarLabelStyle : {
                    fontFamily : "Inter_500Medium",
                    fontSize : 10,
                },
                tabBarStyle : {
                    backgroundColor : backgroundColor,
                    bottom:insets.bottom + 12,
                    height: 66,
                    left: 13,
                    paddingBottom : 7,
                    paddingTop : 6,
                    borderRadius : 50,
                    marginHorizontal : 10,
                    shadowColor : "#333",
                    borderColor : border,
                    borderWidth : 0.5,
                }
            }}>
            <Tabs.Screen name="index"
                options={{
                    tabBarAccessibilityLabel : "Home Tab",
                    tabBarIcon : ({color})=>(<Feather name="home" color={color} size={21}/>),
                    title:"Home"
                }}
            />
            <Tabs.Screen name="workout"
                options={{
                    tabBarAccessibilityLabel : "Workouts Tab",
                    tabBarIcon : ({color})=>(<Feather name="activity" color={color} size={21}/>),
                    title:"Workouts"
                }}
            />
            <Tabs.Screen name="create"
                options={{
                    tabBarAccessibilityLabel : "Create Workout",
                    tabBarButton: (props) => <CreateTabButton {...props} />,
                    tabBarLabel:()=> null
                }}
            />
            <Tabs.Screen name="history"
                options={{
                    tabBarAccessibilityLabel : "History Tab",
                    tabBarIcon : ({color})=>(<Feather name="calendar" color={color} size={21}/>),
                    title:"History"
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    tabBarAccessibilityLabel : "Profile Tab",
                    tabBarIcon : ({color})=>(<Feather name="user" color={color} size={21}/>),
                    title:"Profile"
                }}
            />
        </Tabs>
    )
  }
}
