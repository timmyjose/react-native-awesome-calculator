#include "react-native-awesome-calculator.h"
#include <jni.h>

extern "C" JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeAdd(JNIEnv *env,
                                                             jclass type,
                                                             jdouble a,
                                                             jdouble b) {
  return awesomecalculator::add(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeSub(JNIEnv *env,
                                                             jclass type,
                                                             jdouble a,
                                                             jdouble b) {
  return awesomecalculator::sub(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeMul(JNIEnv *env,
                                                             jclass type,
                                                             jdouble a,
                                                             jdouble b) {
  return awesomecalculator::mul(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeDiv(JNIEnv *env,
                                                             jclass type,
                                                             jdouble a,
                                                             jdouble b) {
  return awesomecalculator::div(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeAnswer(JNIEnv *env,
                                                                jclass type) {
  return awesomecalculator::answer();
}
