/**
 * @flow
 */

import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { normalize } from './utils'
import colors from './colors'

const styles = StyleSheet.create({
  button: {
    height: normalize(48),
    backgroundColor: colors.blue,
    borderRadius: normalize(48 / 2),
    paddingHorizontal: normalize(24),
    justifyContent: 'center',
    shadowColor: colors.blue,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: {
      height: 0
    },
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

type Props = {
  children: React.Node,
  onPress: () => void
}

const Button = (props: Props): React.Element<any> => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)

export default Button
