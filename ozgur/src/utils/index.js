import React from 'react';
// import { Dimensions } from 'react-native';
// import ExtraDimensions from 'react-native-extra-dimensions-android';
import {Dimensions, Platform} from 'react-native';

export const diff = Platform.OS === 'ios' ? 20 : 0;
// export const myHeight = Dimensions.get('window').height;
// export const myWidth = Dimensions.get('window').width;
export const myWidth = Math.round(Dimensions.get('window').width);
export const myHeight = Math.round(Dimensions.get('window').height);
