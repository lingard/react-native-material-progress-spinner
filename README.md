# react-native-material-progress-spinner


A port of [DRPLoadingSpinner](https://github.com/justindhill/DRPLoadingSpinner)

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
| color | #000000 | `string` | Color of the spinner |
| colorSequence | #000000 | `Array<string>` | Color of the spinner |
| size | 37 | `number` | Size of the spinner |


## Acknowledgements

IOS library: [DRPLoadingSpinner](https://github.com/justindhill/DRPLoadingSpinner)
