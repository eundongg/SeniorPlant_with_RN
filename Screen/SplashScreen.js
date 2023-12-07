import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../android/app/src/main/assets/images/logo.png')}
        style={{ width: wp(60), resizeMode: 'contain' }}
      />
      <Text style ={styles.text}>
        독거노인 어르신들을 위한 독거노인 케어 어플입니다 
      </Text>
      <ActivityIndicator
        animating={animating}
        color="#6990F7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
