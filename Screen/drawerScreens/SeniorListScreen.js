import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import mongoose from 'mongoose';

// MongoDB 스키마 정의
const EldersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  plantStatus: String,
  phoneNumber: String,
  specialNote: String,
});

// MongoDB 모델 생성
const Elders = mongoose.model('Elders', EldersSchema);

const SeniorListScreen = ({ navigation }) => {
  const [elders, setElders] = useState([]);

  useEffect(() => {
    // 서버에서 어르신들의 정보를 가져오는 비동기 함수 호출
    const fetchElders = async () => {
      try {
        // Elders 모델에서 데이터 가져오기
        const data = await Elders.find();
        setElders(data);
      } catch (error) {
        console.error('Error while fetching elders data', error);
      } 
    };

    // 어플리케이션이 로드될 때 한 번 호출
    fetchElders();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

  // FlatList에 사용될 아이템 렌더링 함수
  const renderElderItem = ({ item }) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Plant Status: {item.plantStatus}</Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Elder List
      </Text>
      <FlatList
        data={elders}
        renderItem={renderElderItem}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('SeniorForm')}>
          <Text style={{ color: 'black' }}>✔ 관리대상자 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnArea: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    top: 400,
  },

  btnAdd: {
    flex: 1,
    width: '40%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    top: 40,
  },
});

export default SeniorListScreen;
