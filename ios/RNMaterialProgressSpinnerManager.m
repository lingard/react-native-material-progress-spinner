#import "RNMaterialProgressSpinnerManager.h"
#import "RNMaterialProgressSpinner.h"
#import "DRPLoadingSpinner.h"
#import <React/RCTBridge.h>

@implementation RCTConvert(DRPLoadingSpinner)

RCT_ENUM_CONVERTER(DRPRotationDirection, (@{
  @"clockwise": @(DRPRotationDirectionClockwise),
  @"counter-clockwise": @(DRPRotationDirectionCounterClockwise),
}), DRPRotationDirectionClockwise, integerValue)

RCT_CUSTOM_CONVERTER(CFTimeInterval, CFTimeInterval, [self double:json] / 1000.0)

@end

@implementation RNMaterialProgressSpinnerManager

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

- (UIView *)view
{
    return [[RNMaterialProgressSpinner alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(isAnimating, BOOL)
RCT_EXPORT_VIEW_PROPERTY(size, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(lineWidth, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(colorSequence, NSArray<UIColor *>);
RCT_EXPORT_VIEW_PROPERTY(backgroundRailColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(rotationCycleDuration, CFTimeInterval)
RCT_EXPORT_VIEW_PROPERTY(drawCycleDuration, CFTimeInterval)
RCT_EXPORT_VIEW_PROPERTY(maximumArcLength, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(minimumArcLength, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(rotationDirection, DRPRotationDirection)

@end
