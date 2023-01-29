import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import { saveTask, unaTarea, updateTask } from '../../api'

const TaskFormScreen = ({ navigation, route }) => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        priority: '',
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
                    name: task.name,
                    description: task.description,
                    priority: task.priority
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
                placeholder="Ingresar Cuenta"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('name', text)}
                value={task.name}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="Dato Cuenta"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            ></TextInput>
            <TextInput
                style={style.input}
                placeholder="Password _1"
                placeholderTextColor={'#546574'}
                onChangeText={(text) => handleChange('priority', text)}
                value={task.priority}
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
