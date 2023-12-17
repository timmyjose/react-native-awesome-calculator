#import "AwesomeCalculator.h"

@implementation AwesomeCalculator
RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (NSString *)execute:(NSString)cmd {
    const char *nativeCmd = [cmd UTF8String];
    if (nativeCmd == nullptr) {
        return nil;
    }

    const char *result = awesomecalculator::execute(nativeCmd);
    NSString *resultString = [NSString stringWithUTF8String:result];

    return resultString;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAwesomeCalculatorSpecJSI>(params);
}
#endif

@end
