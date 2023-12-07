import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../android/app/src/main/assets/images/logo.png')}
        style={{ width: wp(85), resizeMode: 'contain' }}
      />
      {/* 어르신 상태 확인 버튼 */}
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btnCheck}
          onPress={() => navigation.navigate('SeniorList')}>
          <Text style={{color:'black'}}>✔ 어르신 상태 확인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btnAlarm}
          onPress={() => {
            // 버튼이 클릭되었을 때 수행할 동작 추가            
          }}>
          <Text style={{color: 'white'}}>✔ 알림 확인</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(7),
    paddingRight: wp(7),
    paddingTop: wp(7),
  },
  btnArea: {
    height: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    top: 10,
  },

  btnCheck: {
    flex: 1,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    top: 40,
  },

  btnAlarm: {
    flex: 1,
    width: '90%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    top: 50,
  },
});

export default HomeScreen;
