import { FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../../api'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [refresing, setRefresing] = useState(false)
    const loadTask = async () => {
        const data = await getTasks()
        setTasks(data)
    }
    useEffect(() => {
        loadTask()
    }, [])

    const handleDelet = async (id) => {
        await deleteTask(id)
        await loadTask()
    }
    const renderItem = ({ item }) => {
        return <TaskItem task={item} handleDelet={handleDelet} />
    }
    const onRefresh = React.useCallback(async () => {
        setRefresing(true)
        await loadTask()
        setRefresing(false)
    })
    return (
        <FlatList
            style={{ width: '100%' }}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    colors={['#78e08f']}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#0a3d62"
                />
            }
        />
    )
}

export default TaskList
