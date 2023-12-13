cmake_minimum_required(VERSION 3.4.1)
project(AwesomeCalculator)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(react-native-awesome-calculator            SHARED
            ../cpp/react-native-awesome-calculator.cpp
            cpp-adapter.cpp
)

message(INFO "current android arch abi = ${CMAKE_ANDROID_ARCH_ABI}")
if(CMAKE_ANDROID_ARCH_ABI STREQUAL arm64-v8a)
    message(INFO "Building for ARM 64")
    target_link_directories(react-native-awesome-calculator PUBLIC ../cpp/nativecalc/target/aarch64-linux-android/release/)
    target_link_libraries(react-native-awesome-calculator libnativecalc.a)
elseif(CMAKE_ANDROID_ARCH_ABI STREQUAL x86)
    message(INFO "Building for x86")
    target_link_directories(react-native-awesome-calculator PUBLIC ../cpp/nativecalc/target/i686-linux-android/release/)
    target_link_libraries(react-native-awesome-calculator libnativecalc.a)
elseif(CMAKE_ANDROID_ARCH_ABI STREQUAL x86_64)
    message(INFO "Building for x86_64")
    target_link_directories(react-native-awesome-calculator PUBLIC ../cpp/nativecalc/target/x86_64-linux-android/release/)
    target_link_libraries(react-native-awesome-calculator libnativecalc.a)
elseif(CMAKE_ANDROID_ARCH_ABI STREQUAL armeabi-v7a)
    message(INFO "Building for armeabi-v7a")
    target_link_directories(react-native-awesome-calculator PUBLIC ../cpp/nativecalc/target/armv7-linux-androideabi/release/)
    target_link_libraries(react-native-awesome-calculator libnativecalc.a)
else()
    message(ERROR "Building for UNKNOWN abi")
endif()

# Specifies a path to native header files.
include_directories(
            ../cpp
)
