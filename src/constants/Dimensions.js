import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CAROUSEL_CARD_LENGTH = SCREEN_WIDTH * 0.8;
const CAROUSEL_SPACING = SCREEN_WIDTH * 0.02;
const CAROUSEL_SIDE_CARD_LENGTH = (SCREEN_WIDTH * 0.18) / 2;

export default { SCREEN_WIDTH, SCREEN_HEIGHT, CAROUSEL_CARD_LENGTH, CAROUSEL_SIDE_CARD_LENGTH, CAROUSEL_SPACING }