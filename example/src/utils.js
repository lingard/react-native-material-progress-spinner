import R from 'ramda'
import { Dimensions } from 'react-native'

const { width: windowWidth } = Dimensions.get('window')

const scale = Math.min(windowWidth / 375, 1)

export function normalize(size: number): number {
  return Math.round(scale * size)
}

export const getRandomIndex = R.compose(
  Math.floor,
  length => R.multiply(length, Math.random()),
  R.length
)

// sample :: Array -> any
export const sample = R.converge(
  R.nth,
  [getRandomIndex, R.identity]
)
