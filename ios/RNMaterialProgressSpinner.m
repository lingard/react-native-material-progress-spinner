#import "DRPLoadingSpinner.h"
#import "RNMaterialProgressSpinner.h"
#import <React/RCTConvert.h>
#import <React/RCTBridgeModule.h>
#import <React/UIView+React.h>

@implementation RNMaterialProgressSpinner
{
    DRPLoadingSpinner *_spinner;
}

#pragma mark - React View Management

- (void)layoutSubviews
{
    [super layoutSubviews];
    [self redrawSpinner];
}

#pragma mark - Properties

- (void)setIsAnimating:(BOOL)isAnimating {
    _isAnimating = isAnimating;

    if (_spinner != nil) {
        if (isAnimating) {
            [_spinner startAnimating];
        } else {
            [_spinner stopAnimating];
        }
    }
}

- (void)setSize:(CGFloat)size {
    _size = size;

    if (_spinner != nil) {
        [_spinner setFrame:CGRectMake(0, 0, size, size)];
        _spinner.center = self.center;
    }
}

- (void)setLineWidth:(CGFloat)lineWidth {
    _lineWidth = lineWidth;

    if (_spinner != nil) {
        _spinner.lineWidth = lineWidth;
    }
}

- (void)setColorSequence:(NSArray<UIColor *> *)colorSequence {
    _colorSequence = colorSequence;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.colorSequence = colorSequence;
    }
}

- (void)setBackgroundRailColor:(UIColor *)backgroundRailColor {
    _backgroundRailColor = backgroundRailColor;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.backgroundRailColor = backgroundRailColor;
    }
}

- (void)setMaximumArcLength:(CGFloat)maximumArcLength {
    _maximumArcLength = maximumArcLength;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.maximumArcLength = maximumArcLength;
    }
}

- (void)setMinimumArcLength:(CGFloat)minimumArcLength {
    _minimumArcLength = minimumArcLength;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.minimumArcLength = minimumArcLength;
    }
}

- (void)setRotationCycleDuration:(CFTimeInterval)rotationCycleDuration {
    _rotationCycleDuration = rotationCycleDuration;

    // [self redrawSpinner];

    if (_spinner != nil) {
        _spinner.rotationCycleDuration = rotationCycleDuration;
    }
}

- (void)setDrawCycleDuration:(CFTimeInterval)drawCycleDuration {
    _drawCycleDuration = drawCycleDuration;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.drawCycleDuration = drawCycleDuration;
    }
}

- (void)setRotationDirection:(DRPRotationDirection)rotationDirection {
    _rotationDirection = rotationDirection;

    // [self redrawSpinner];
    if (_spinner != nil) {
        _spinner.rotationDirection = rotationDirection;
    }
}

- (void)redrawSpinner {

    if (_spinner != nil) {
        [_spinner removeFromSuperview];
    }

    _spinner = [[DRPLoadingSpinner alloc] initWithFrame:CGRectMake(0, 0, _size, _size)];

    [self applyProperties];
    [self insertSubview:_spinner atIndex:0];

    if (_isAnimating) {
        [_spinner startAnimating];
    } else {
        [_spinner stopAnimating];
    }
}

- (void)applyProperties {
    _spinner.lineWidth = _lineWidth;
    _spinner.colorSequence = _colorSequence;
    _spinner.backgroundRailColor = _backgroundRailColor;
    _spinner.minimumArcLength = _minimumArcLength;
    _spinner.rotationCycleDuration = _rotationCycleDuration;
    _spinner.drawCycleDuration = _drawCycleDuration;
    _spinner.rotationDirection = _rotationDirection;
    // _spinner.center = self.center;
}

@end

