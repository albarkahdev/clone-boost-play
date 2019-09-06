import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const getWidth = (num) => {
	const currentWidth = 375;
    return (num/currentWidth) * width;
}

const getHeight = (num) => {
	const currentHeight = 812;
    return (num/currentHeight) * height;
}

export { height, width, getHeight, getWidth };
