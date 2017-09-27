/**
 * @flow
 */

import { times, values } from 'ramda'
import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native'
import Spinner from 'react-native-material-progress-spinner'
import Button from './button'
import { normalize, sample } from './utils'
import colors from './colors'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const colorValues = values(colors)

const NUM_GRID_ITEMS_PER_ROW = 3
const NUM_ROWS = Math.round(windowHeight / (windowWidth / NUM_GRID_ITEMS_PER_ROW))

const NUM_GRID_ITEMS = NUM_ROWS * NUM_GRID_ITEMS_PER_ROW

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1
  },
  contentContainerStyle: {
    height: windowHeight,
    width: windowWidth * 2
  },

  page: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight
  },

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: 'rgba(0, 0, 0, 0.08)',
    // backgroundColor: 'blue'
  },

  footer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: normalize(24),
    left: 0,
    right: 0,
  },
})

type State = {
  isAnimating: boolean
}

const getRandomColors = () => ({
  backgroundColor: sample(colorValues),
  spinnerColor: sample(colorValues)
})

class GridItem extends PureComponent {
  constructor() {
    super()

    this.state = getRandomColors()
  }

  handlePress = () => {
    this.setState(getRandomColors)
  }

  render() {
    return (
      <View
        style={[
          styles.gridItem,
          {
            backgroundColor: this.state.backgroundColor
          }
        ]}
      >
        <Spinner
          isAnimating={this.props.isAnimating}
          size={28}
          color='white'
          lineWidth={1}
        />
      </View>
    )
  }
}

export default class App extends PureComponent<*, State> {
  state = {
    isAnimating: true
  }

  toggleAnimating = () => {
    this.setState({
      isAnimating: !this.state.isAnimating
    })
  }

  renderSpinnerGrid() {
    return times(nth => (
      <GridItem key={nth} isAnimating={this.state.isAnimating} />
    ), NUM_GRID_ITEMS)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          pagingEnabled
          horizontal
          directionalLockEnabled
          alwaysBounceVertical={false}
          alwaysBounceHorizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.page}>
            <View style={styles.spinner}>
              <Spinner
                isAnimating={this.state.isAnimating}
                size={36}
                lineWidth={1}
                color='blue'
              />
            </View>
            <Text>A simple spinner</Text>
          </View>

          <View style={styles.page}>
            <View style={styles.grid}>
              {this.renderSpinnerGrid()}
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.footer}
          onPress={this.toggleAnimating}
        >
          <Button onPress={this.toggleAnimating}>
            {this.state.isAnimating ? 'Stop' : 'Start'}
          </Button>
        </View>
      </View>
    )
  }
}
