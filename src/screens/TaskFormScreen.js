import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import Layout from '../../Layout'
import { saveTask } from '../../api'

const TaskFormScreen = ({ navigation }) => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        priority: '',
        pass2: ''
    })
    const handleChange = (name, value) => setTask({ ...task, [name]: value })
    const handleSubmit = () => {
        saveTask(task)
        navigation.navigate('HOME')
    }
    return (
        <Layout>
            <TextInput
                style={style.input}
                placeholder="Ingresar Cuenta"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('name', text)}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="Dato Cuenta"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('description', text)}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="Password _1"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('priority', text)}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder=" Password_2"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('pass2', text)}
            ></TextInput>
            <TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
                <Text style={style.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </Layout>
    )
}
const style = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom: 7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        fontSize: 14,
        color: '#ffffff',
        padding: 10
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: '#10ac84',
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    }
})
export default TaskFormScreen
