import React from "react"
import { View, Text, StyleSheet } from "react-native"
import theme from "../theme.jsx"
import StyledText from "./StyledText.jsx"

const Passwords = props => {
  return (
    <View>
      <StyledText>Password 1: {props.password1}</StyledText>
      <StyledText>Password 2: {props.password2}</StyledText>
      <StyledText>Pasword 3: {props.password3}</StyledText>
    </View>
  )
}



const CuentasItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold'>id: {props.id}</StyledText>
    <StyledText>Nombre Cuenta: {props.nombreCuenta}</StyledText>
    <StyledText style={styles.nameCuenta}>Nombre de Usuario: {props.nombreUsuario}</StyledText>
    <Passwords {...props}/>
    <StyledText>URL: {props.url}</StyledText>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom:5
  },
  nameCuenta: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden'

  }
})

export default CuentasItem