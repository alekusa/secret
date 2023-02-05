import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import { saveTask, unaTarea, updateTask } from '../../api'

const TaskFormScreen = ({ navigation, route }) => {
    const [task, setTask] = useState({
        username: '',
        email: '',
        password: '',
        pass2: ''
    })
    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) => setTask({ ...task, [name]: value })
    useEffect(() => {
        if (route.params && route.params.id) {
            setEditing(true)
            navigation.setOptions({ headerTitle: 'Actualizando' })
            ;(async () => {
                const task = await unaTarea(route.params.id)
                setTask({
                    username: task.username,
                    email: task.email,
                    password: task.password
                })
            })()
        }
    }, [])
    const handleSubmit = async () => {
        try {
            if (!editing) {
                await saveTask(task)
            } else {
                await updateTask(route.params.id, task)
            }
            navigation.navigate('HOME')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Layout>
            <TextInput
                style={style.input}
                placeholder="Username"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('username', text)}
                value={task.username}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="Password"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('password', text)}
                value={task.password}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="email"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('email', text)}
                value={task.email}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder=" Password_2"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('pass2', text)}
                //value={task.pass2}
            ></TextInput>
            {!editing ? (
                <TouchableOpacity
                    style={style.buttonSave}
                    onPress={handleSubmit}
                >
                    <Text style={style.buttonText}>Guardar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={style.buttonUpdate}
                    onPress={handleSubmit}
                >
                    <Text style={style.buttonText}>Actualizar</Text>
                </TouchableOpacity>
            )}
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
    buttonUpdate: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: '#e58e26',
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    }
})
export default TaskFormScreen
