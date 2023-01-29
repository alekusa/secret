import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, TouchableOpacity } from 'react-native'
const Stack = createNativeStackNavigator()
//* paginas

import Main from './src/components/Main'
import HomeScreen from './src/screens/HomeScreen'
import TaskFormScreen from './src/screens/TaskFormScreen'

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HOME"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'Secret App',
                        headerStyle: { backgroundColor: '#222f3c' },
                        headerTitleStyle: { color: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('task')}
                            >
                                <Text
                                    style={{
                                        color: '#ffffff',
                                        marginRight: 20,
                                        fontSize: 17
                                    }}
                                >
                                    New
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="task"
                    component={TaskFormScreen}
                    options={{
                        title: 'Crear una cuenta',
                        headerStyle: { backgroundColor: '#222f3c' },
                        headerTitleStyle: { color: '#ffffff' },
                        headerTintColor: '#ffffff'
                    }}
                />
                <Stack.Screen name="priPage" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
