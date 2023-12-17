Pod::Spec.new { |spec|
  spec.name = 'Nativecalc'
  spec.version = '0.1.0'
  spec.summary = 'UNKNOWN'
  spec.authors = {
    "Timmy Jose<zoltan.jose@gmail.com>"
  }
  spec.license = { :type => 'UNKNOWN' }
  spec.homepage = 'UNKNOWN'
  spec.macos.deployment_target = '10.10'
  spec.ios.deployment_target = '8.0'
  spec.pod_target_xcconfig = {
    'ENABLE_BITCODE' => 'NO',
    'LIBRARY_SEARCH_PATHS[sdk=iphoneos*][arch=arm64]' => '${PODS_TARGET_SRCROOT}/../target/aarch64-apple-ios',
    'LIBRARY_SEARCH_PATHS[sdk=iphonesimulator*][arch=x86_64]' => '${PODS_TARGET_SRCROOT}/../target/x86_64-apple-ios',
    'LIBRARY_SEARCH_PATHS[sdk=iphonesimulator*][arch=arm64]' => '${PODS_TARGET_SRCROOT}/../target/aarch64-apple-ios-sim',
    'OTHER_LDFLAGS' => '-lnativecalc',
  }
  spec.preserve_paths = ['dist/**/*']
  spec.source_files = ['src/**/*']
  spec.source = {
    :http => 'UNKNOWN',
  }
}
