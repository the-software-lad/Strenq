import { useAppThemeColor } from '@/theme/app-theme';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

type OnboardingOptionCardProps = {
    delay: number;
    description?: string;
    icon:  ReactNode;
    label: string; 
    onPress: ()=>void;
    selected: boolean;
}

const OnboardingCard = ({
    delay=0,
    description,
    icon,
    label,
    onPress,
    selected
}:OnboardingOptionCardProps) => {
    const primaryForeground = useAppThemeColor("primaryForeground");
  return (
    <Animated.View entering={FadeInRight.delay(delay).duration(250)}>
        <Pressable>
    </Animated.View>
    
  )
}

export default OnboardingCard