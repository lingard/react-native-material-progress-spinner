# react-native-material-progress-spinner


A react-native port of [DRPLoadingSpinner](https://github.com/justindhill/DRPLoadingSpinner)

Only supports iOS at the moment.

## Getting started

`$ npm install react-native-material-progress-spinner --save`

### Mostly automatic installation

`$ react-native link react-native-material-progress-spinner`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-loading-spinner` and add `RNMaterialProgressSpinner.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMaterialProgressSpinner.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Example
Check [index.ios.js](https://github.com/lingard/react-native-material-progress-spinner/blob/master/example/app.js) in the Example folder.

## Usage
```javascript
import Spinner from 'react-native-loading-spinner';

  render() {
    return (
      <Spinner
        lineWidth={1}
      />
    )
  }

```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| isAnimating | `true` | `boolean` | Visibility of the spinner |
| color | `rgb(0, 122, 255)` | `string` | Color of the spinner |
| backgroundRailColor | 'transparent' | `string` | color of the background arc |
| colorSequence | `undefined` | `Array<string>` |  | An array of colors that changes on each cycle |
| size | `36` | `number` | Size of the spinner |
| lineWidth | `2` | `number` | line width of the arc |
| rotationDirection | `clockwise` | `string` | can either be `clockwise` or `counter-clockwise` |
| rotationCycleDuration | `1500` | `number` | Duration of the rotation in ms |
| drawCycleDuration | `750` | `number` | length of time taken up by any period of expansion or contraction in ms |
| maximumArcLength | `(2 * Math.PI) - (Math.PI / 4)` | `number` | |
| minimumArcLength | `0.1` | `number` | |

## Acknowledgements

IOS library: [DRPLoadingSpinner](https://github.com/justindhill/DRPLoadingSpinner)
