#include <jni.h>
#include "react-native-awesome-calculator.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return awesomecalculator::multiply(a, b);
}
