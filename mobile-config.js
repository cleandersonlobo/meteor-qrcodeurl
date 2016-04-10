App.info({
  name: "QRCode Url",
  description: 'Read QR Code Url',
  author: 'Cleanderosn Lobo',
  website: 'www.cleandersonlobo.com',
  version: '1.2'
});
App.icons({
  'iphone': 'resources/icons/iphone.png',
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'android_ldpi': 'resources/icons/android_ldpi.png',
  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png'
});
App.launchScreens({
  'iphone': 'resources/splash/iphone.png',
  'iphone6': 'resources/splash/iphone6.png',
  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
  'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
  'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
  'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png'
});


//App.setPreference('AutoHideSplashScreen', true);
//App.setPreference('StatusBarOverlaysWebView', true);


App.accessRule("*");
App.setPreference("orientation", "default");
App.setPreference('KeyboardDisplayRequiresUserAction', false);
