import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Text>Index</Text>

        <Pressable onPress={()=>router.push({
          pathname:"/(public)/example",
          params : {name: "Strenq"},
        })}>
          <Text>Go to Example</Text>
        </Pressable>
      </View>
    </SafeAreaView>
    
  )
}

export default Index