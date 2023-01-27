import React from "react";
import { FlatList, Text } from "react-native";
import cuentas from '../data/data.js'
import CuentasItem from './CuentasItem.jsx'
const CuentasList = () => {
  return ( 
    <FlatList data={cuentas}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <CuentasItem {...repo} />
      )}
    />
  )
}

export default CuentasList