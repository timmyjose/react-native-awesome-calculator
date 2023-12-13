package com.awesomecalculator;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AwesomeCalculatorModule.NAME)
public class AwesomeCalculatorModule extends NativeAwesomeCalculatorSpec {
  public static final String NAME = "AwesomeCalculator";

  public AwesomeCalculatorModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("react-native-awesome-calculator");
  }

  private static native double nativeAdd(double a, double b);
  private static native double nativeSub(double a, double b);
  private static native double nativeMul(double a, double b);
  private static native double nativeDiv(double a, double b);

  @Override
  public double add(double a, double b) {
    return nativeAdd(a, b);
  }

  @Override
  public double sub(double a, double b) {
    return nativeSub(a, b);
  }

  @Override
  public double mul(double a, double b) {
    return nativeMul(a, b);
  }

  @Override
  public double div(double a, double b) {
    return nativeDiv(a, b);
  }
}
