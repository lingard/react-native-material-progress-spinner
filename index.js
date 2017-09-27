/**
 * @flow
 */

import React, { PureComponent } from 'react'
import {
  processColor,
  NativeModules,
  requireNativeComponent,
  ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

let RNMaterialProgressSpinner = null

type Props = {
  style: any,
  isAnimating: boolean,
  size: number,
  color?: string,
  colorSequence?: Array<string>,
  backgroundRailColor?: string,
  lineWidth: number,
  rotationDirection: 'clockwise'|'counter-clockwise',
  drawCycleDuration: number,
  rotationCycleDuration: number,
  maximumArcLength: number,
  minimumArcLength: number,
}

export default class MaterialProgressSpinner extends PureComponent<Props> {
  static propTypes = {
    style: ViewPropTypes.style,
    isAnimating: PropTypes.bool.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
    colorSequence: PropTypes.arrayOf(PropTypes.string),
    backgroundRailColor: PropTypes.string.isRequired,
    lineWidth: PropTypes.number.isRequired,
    rotationDirection: PropTypes.string.isRequired,
    drawCycleDuration: PropTypes.number.isRequired,
    rotationCycleDuration: PropTypes.number.isRequired,
    maximumArcLength: PropTypes.number.isRequired,
    minimumArcLength: PropTypes.number.isRequired,
  }

  static defaultProps = {
    isAnimating: true,
    size: 28,
    lineWidth: 2,
    color: 'blue',
    backgroundRailColor: 'transparent',
    rotationDirection: 'clockwise',
    drawCycleDuration: 750, // milliseconds
    rotationCycleDuration: 1500, // milliseconds
    staticArcLength: 0,
    maximumArcLength: (2 * Math.PI) - (Math.PI / 4),
    minimumArcLength: 0.1,
  }

  render(): React.Element<any> {
    const {
      style,
      size,
      color,
      colorSequence,
    } = this.props

    let colors

    if (colorSequence && Array.isArray(colorSequence)) {
      colors = colorSequence.map(processColor)
    } else {
      colors = [processColor(color)]
    }

    const sizeStyle = {
      height: size,
      width: size
    }

    return (
      <RNMaterialProgressSpinner
        style={[sizeStyle, style]}
        ref={this.setSpinnerRef}
        size={size}
        colorSequence={colors}
        {...this.props}
      />
    )
  }
}

// Since RNPM does not recognize `requireNativeComponent`, so we have to
// add this line, and RNPM will link native modules automatically
NativeModules.RNMaterialProgressSpinner

// Native component
RNMaterialProgressSpinner = requireNativeComponent(
  'RNMaterialProgressSpinner',
  MaterialProgressSpinner
)
