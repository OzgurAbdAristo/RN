import React from 'react';
import {Image, StyleSheet} from 'react-native';
import imgLogo from '../../images/bpLogo.png';
import * as colors from '../../colors';

const Logo = props => <Image source={imgLogo} style={styles.img} />;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    // tintColor: colors.PRIMARY,
  },
});

export default Logo;
