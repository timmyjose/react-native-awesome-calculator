#!/usr/bin/env bash

cargo clean 
rm -rf ../target
rm -rf dist

# iOS
cargo pod build --ios

mkdir -p ../target/aarch64-apple-ios
cp dist/aarch64-apple-ios/libnativecalc.a ../target/aarch64-apple-ios/

mkdir -p ../target/x86_64-apple-ios
cp dist/x86_64-apple-ios/libnativecalc.a ../target/x86_64-apple-ios/

# Android
export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/26.1.10909125"

# NOTE for CI: this requires the `cargo-ndk`tool to be already installed.
cargo ndk --target aarch64-linux-android --platform 21 -- build --release
cargo ndk --target armv7-linux-androideabi --platform 21 -- build --release
cargo ndk --target i686-linux-android --platform 21 -- build --release
cargo ndk --target x86_64-linux-android --platform 21 -- build --release

mkdir -p ../target/aarch64-linux-android/release
cp target/aarch64-linux-android/release/libnativecalc.a ../target/aarch64-linux-android/release/

mkdir -p ../target/armv7-linux-androideabi/release
cp target/armv7-linux-androideabi/release/libnativecalc.a ../target/armv7-linux-androideabi/release/

mkdir -p ../target/i686-linux-android/release
cp target/i686-linux-android/release/libnativecalc.a ../target/i686-linux-android/release/

mkdir -p ../target/x86_64-linux-android/release
cp target/x86_64-linux-android/release/libnativecalc.a ../target/x86_64-linux-android/release/


