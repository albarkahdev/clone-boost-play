'use strict';

module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
        ios: null,
      },
    },
    'react-native-device-info': {
      platforms: {
        ios: null,
      },
    },
    'react-native-splash-screen': {
      platforms: {
        ios: null,
      },
    },
    'react-native-linear-gradient': {
      platforms: {
        ios: null,
      }
    }
  }
};