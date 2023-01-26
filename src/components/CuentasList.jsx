import React from "react";
import { FlatList, View, Text } from "react-native";
import cuentas from '../data/data.js'

const CuentasList = () => {
  return ( 
    <FlatList data={cuentas}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: cuent }) => (
        <View key={cuent.id}>
          <Text>id: {cuent.id}</Text>
          <Text>Nombre Cuenta: {cuent.nombreCuenta}</Text>
          <Text>Nombre de Usuario: {cuent.nombreUsuario}</Text>
          <Text>Password 1: {cuent.password1}</Text>
          <Text>Password 2: {cuent.password2}</Text>
          <Text>Pasword 3: {cuent.password3}</Text>
          <Text>URL: {cuent.url}</Text>
        </View>
      )}
    />
  )
}

export default CuentasList