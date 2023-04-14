import { Dimensions, Platform } from "react-native";
import { moderateScale } from 'react-native-size-matters';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CAROUSEL_CARD_LENGTH = SCREEN_WIDTH * 0.8;
const CAROUSEL_SPACING = SCREEN_WIDTH * 0.02;
const CAROUSEL_SIDE_CARD_LENGTH = (SCREEN_WIDTH * 0.18) / 2;

// Function to check if the device is a tablet
function isLargeScreen() {
    // Define a threshold for tablet screen size
    const tabletThreshold = 600;

    // Determine if the device is a tablet based on screen size and platform
    // You can adjust the threshold value based on your design requirements
    return (
        (Platform.OS === 'ios' && (SCREEN_WIDTH > tabletThreshold || SCREEN_HEIGHT > tabletThreshold)) ||
        (Platform.OS === 'android' && Platform.isTV === false && (SCREEN_WIDTH > tabletThreshold && SCREEN_HEIGHT > tabletThreshold))
    );
}

const SCALING_FACTOR = isLargeScreen() ? 0.5 : 1.5;

export default { SCREEN_WIDTH, SCREEN_HEIGHT, CAROUSEL_CARD_LENGTH, CAROUSEL_SIDE_CARD_LENGTH, CAROUSEL_SPACING, SCALING_FACTOR }