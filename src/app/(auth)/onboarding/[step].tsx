import Button from '@/components/ui/button';
import SafeAreaScreen from '@/components/ui/safe-area-screen';
import { answers, saveOnboardingAnswers, stepIndex, steps } from '@/constants/onboarding';
import { OnboardingValues } from '@/lib/validations/onboarding-validations';
import { useAppThemeColor } from '@/theme/app-theme';
import { Feather } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

const Onboarding = () => {
    const {step: key = ""} = useLocalSearchParams<{step: string}>();
    const router = useRouter();
    const foreground = useAppThemeColor("foreground");

    const [values, setValues] = useState<Partial<OnboardingValues>>(()=>({
        ...answers
    }));

    const index = stepIndex(key);
    const step = steps[index];

    if(!step) return <Redirect href="/welcome"/>;

    const next = steps[index+1];


    const select = (value : OnboardingValues [typeof step.field])=>{
        const nextValues = {...values , [step.field]: value};
        saveOnboardingAnswers(step.field, value)
        setValues(nextValues);
    }

    
    const goBack = () =>{
        if(index === 0){
            router.replace("/welcome");
        }else{
            router.back();
        }
    }

    
    const goNext = () =>{
        if(next){
            router.push({
                pathname:"/onboarding/[step]",
                params:{step: next.key}
            });
        }else{
            router.back();
        }
    }

    return (
        <SafeAreaScreen>
            <View className='flex-1 px-6 pb-5 pt-4'>
                <View className='flex-row items-center gap-2'>
                    <Pressable
                        className='-ml-3 h-11 w-11 items-center justify-center rounded-full  active:bg-muted'
                    >
                        <Feather color={foreground} name="arrow-left" size={23}/>
                    </Pressable>
                    <View className='h-2 flex-1 rounded-full overflow-hidden bg-border'>
                        <View className='h-full rounded-full bg-primary' 
                        style={{width:`${((index+1)/ steps.length)*100}%`}}/>
                    </View>
                </View>
                {step.key === "gender" && <></>}
                {step.key === "goal" && <></>}
                {step.key === "experience" && <></>}
                <Button disabled={!values[step.field]} onPress={goNext}>
                    {next? "Next" : "Contunue to sign up"}
                </Button>
            </View>
        </SafeAreaScreen>
    )
}

export default Onboarding