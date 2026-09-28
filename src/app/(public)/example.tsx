import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Example = () => {
    const {name = ""} = useLocalSearchParams()
  return (
    <SafeAreaView
        className='p-10 flex-1 items-center justify-center'
    >
        <Text className='font-inter-bold'>{name} Example Screen</Text>
        <Pressable onPress={()=>router.back()}><Text className='font-inter-semibold mt-5'>Go back</Text></Pressable>
    </SafeAreaView>
    
  )
}

export default Example;