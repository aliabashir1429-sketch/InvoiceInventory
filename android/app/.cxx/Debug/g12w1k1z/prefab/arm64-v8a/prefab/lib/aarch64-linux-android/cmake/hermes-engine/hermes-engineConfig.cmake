if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/Mg/.gradle/caches/8.14/transforms/80879d4be704e2b4a043b21bc732c6f9/transformed/hermes-android-250829098.0.14-debug/prefab/modules/hermesvm/libs/android.arm64-v8a/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Mg/.gradle/caches/8.14/transforms/80879d4be704e2b4a043b21bc732c6f9/transformed/hermes-android-250829098.0.14-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

