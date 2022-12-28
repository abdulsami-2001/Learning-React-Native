import { TestIds } from 'react-native-google-mobile-ads'

export const AdmobIds = {
    BANNER: __DEV__ ? TestIds.BANNER : "ca-app-pub-1134648197562102/5440890440",  // Bed_nap App Banner Ad Id
    REWARDED: __DEV__ ? TestIds.REWARDED : '',  // Bed_nap App Rewarded Ad Id
    INTERSTITIAL: __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-1134648197562102/7453291134',    // Bed_nap App interstitial Ad Id
    REWARDED_INTERSTITIAL: __DEV__ ? TestIds.REWARDED_INTERSTITIAL : '',    // Bed_nap App rewared interstitial Ad Id
    TEST_ID_INTERSTITIAL: TestIds.INTERSTITIAL,
    TEST_ID_REWARDED: TestIds.REWARDED
}
