#include "react-native-awesome-calculator.h"
#include <jni.h>

extern "C" JNIEXPORT jstring JNICALL
Java_com_awesomecalculator_AwesomeCalculatorModule_nativeExecute(JNIEnv *env,
                                                                 jclass type,
                                                                 jstring cmd) {
  const char *nativeCmd = env->GetStringUTFChars(cmd, JNI_FALSE);
  if (nativeCmd == nullptr) {
    return nullptr;
  }

  const char *result = awesomecalculator::execute(nativeCmd);
  env->ReleaseStringUTFChars(cmd, nativeCmd);

  return env->NewStringUTF(result);
}