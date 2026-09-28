import { Stack } from 'expo-router'

const PublicLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="example"/>
    </Stack>
  )
}

export default PublicLayout