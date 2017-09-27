#import <React/RCTView.h>
#import "DRPLoadingSpinner.h"

@interface RNMaterialProgressSpinner : RCTView

@property (nonatomic, assign) BOOL isAnimating;

@property (nonatomic, assign) CGFloat size;
@property (nonatomic, assign) CGFloat lineWidth;

@property (nonatomic, strong) NSArray<UIColor *> *colorSequence;
@property (nonatomic) UIColor *backgroundRailColor;

@property (nonatomic, assign) CGFloat maximumArcLength;
@property (nonatomic, assign) CGFloat minimumArcLength;

@property (nonatomic, assign) CFTimeInterval rotationCycleDuration;
@property (nonatomic, assign) CFTimeInterval drawCycleDuration;

@property (nonatomic, assign) DRPRotationDirection rotationDirection;

@end

