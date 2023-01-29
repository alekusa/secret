const URL = 'http://10.0.2.2:4000/project'

export const getTasks = async () => {
    const res = await fetch(URL)
    return await res.json()
}
export const saveTask = async (newTask) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    return await res.json()
}
export const deleteTask = async (id) => {
    await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
}
