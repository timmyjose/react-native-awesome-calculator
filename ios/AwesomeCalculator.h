#ifdef __cplusplus
#import "react-native-awesome-calculator.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAwesomeCalculatorSpec.h"

@interface AwesomeCalculator : NSObject <NativeAwesomeCalculatorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AwesomeCalculator : NSObject <RCTBridgeModule>
#endif

@end
