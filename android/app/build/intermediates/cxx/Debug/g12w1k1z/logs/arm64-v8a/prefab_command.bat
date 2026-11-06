@echo off
"C:\\Program Files\\Microsoft\\jdk-17.0.18.8-hotspot\\bin\\java" ^
  --class-path ^
  "C:\\Users\\Mg\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.1.0\\aa32fec809c44fa531f01dcfb739b5b3304d3050\\cli-2.1.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  arm64-v8a ^
  --os-version ^
  24 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  27 ^
  --output ^
  "C:\\Users\\Mg\\AppData\\Local\\Temp\\agp-prefab-staging16823113224821291799\\staged-cli-output" ^
  "C:\\Users\\Mg\\InvoiceInventory\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-reanimated\\4i4j2141" ^
  "C:\\Users\\Mg\\InvoiceInventory\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-worklets\\h4y14f3t" ^
  "C:\\Users\\Mg\\.gradle\\caches\\8.14\\transforms\\b3e1031fb1c94ecf7b2ea4a5cac15d6c\\transformed\\react-android-0.86.0-debug\\prefab" ^
  "C:\\Users\\Mg\\.gradle\\caches\\8.14\\transforms\\80879d4be704e2b4a043b21bc732c6f9\\transformed\\hermes-android-250829098.0.14-debug\\prefab" ^
  "C:\\Users\\Mg\\.gradle\\caches\\8.14\\transforms\\c9fae5339e08911027aad8af0a033f79\\transformed\\fbjni-0.7.0\\prefab"
