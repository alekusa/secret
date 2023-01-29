import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({ task, handleDelet }) => {
    const nav = useNavigation()
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => nav.navigate('task', { id: task.id })}
            >
                <Text style={styles.imtemTitle}>{task.name}</Text>
                <Text style={styles.imtemTitle}>{task.priority}</Text>
                <Text style={styles.imtemTitle}>{task.description}</Text>
                <Text style={styles.imtemTitle}>{task.createdAt}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#ee5253',
                    padding: 7,
                    borderRadius: 7
                }}
                onPress={() => handleDelet(task.id)}
            >
                <Text style={{ color: '#ffffff' }}> DELETED </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imtemTitle: {
        color: '#ffffff'
    }
})

export default TaskItem
