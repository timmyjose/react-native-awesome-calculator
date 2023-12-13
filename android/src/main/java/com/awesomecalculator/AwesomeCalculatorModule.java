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

  private static native String nativeExecute(String cmd);

  @Override
  public String execute(String cmd) {
    return nativeExecute(cmd);
  }
}
