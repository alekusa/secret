import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import CuentasList from './CuentasList'
const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <CuentasList />
        </View>
    )
}

export default Main
