import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';


const SeniorFormScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [plantStatus, setPlantStatus] = useState('');

  const handleSubmit = async () => {
    try {
      // Elders 모델을 사용하여 새로운 어르신 정보 생성
      const newElder = new Elders({
        name,
        age,
        plantStatus,
        phoneNumber,
        specialNote,
      });

      // MongoDB에 저장
      await newElder.save();

      console.log('어르신 정보가 성공적으로 업로드되었습니다.');
      // 여기서 서버로 어르신 정보가 업로드되었다는 신호를 보내는 로직을 추가해야 합니다.
    } catch (error) {
      console.error('요청 중 오류 발생', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../android/app/src/main/assets/images/form.png')}
        style={{ width: wp(60), resizeMode: 'contain' }}
      />
      <TextInput
        style={styles.textFormTop}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textFormBottom}
        placeholder="나이"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.textFormBottom}
        placeholder="화분 상태 (양호, 주의, 위험)"
        value={plantStatus}
        onChangeText={setPlantStatus}
      />
      <TextInput
        style={styles.textFormBottom}
        placeholder="전화번호"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.textFormSpecialNote}
        placeholder="특이사항"
        value={specialNote}
        onChangeText={setSpecialNote}
      />
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={{ color: 'white' }}>✔ 제출</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(7),
    paddingRight: wp(7),
    paddingTop: wp(4),
  },
  textFormTop: {
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: '100%',
    height: hp(8),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormBottom: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(8),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormSpecialNote: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(15),
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnArea: {
    height: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    top: 10,
  },
  btnSubmit: {
    flex: 1,
    width: '25%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    top: 40,
  },
});

export default SeniorFormScreen;
