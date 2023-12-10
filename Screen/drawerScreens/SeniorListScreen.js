import React, { useState, useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  Modal,
  TextInput,
  searchQuery 
} from 'react-native';

const SeniorListScreen = ({ navigation }) => {
  const [elders, setElders] = useState([
    {
      _id: '1',
      name: '홍길동',
      age: 87,
      plantStatus: '양호',
      phoneNumber: '010-1234-1234',
      specialNote: '무릎이 안좋음',
    },
    {
      _id: '2',
      name: '김영희',
      age: 75,
      plantStatus: '주의',
      phoneNumber: '010-5678-5678',
      specialNote: '고혈압 주의',
    },
    {
      _id: '3',
      name: '이철수',
      age: 80,
      plantStatus: '위험',
      phoneNumber: '010-9876-9876',
      specialNote: '당뇨병 의심',
    },
    {
      _id: '4',
      name: '박순이',
      age: 92,
      plantStatus: '양호',
      phoneNumber: '010-4321-4321',
      specialNote: '청력 저하',
    },
    {
      _id: '5',
      name: '정미경',
      age: 78,
      plantStatus: '주의',
      phoneNumber: '010-8765-8765',
      specialNote: '관절염 주의',
    },
    // Add more data as needed
  ]);  

  // useEffect(() => {
  //   // 서버에서 어르신들의 정보를 가져오는 비동기 함수 호출
  //   const fetchElders = async () => {
  //     try {
  //       // Elders 모델에서 데이터 가져오기
  //       const data = await Elders.find();
  //       setElders(data);
  //     } catch (error) {
  //       console.error('Error while fetching elders data', error);
  //     } 
  //   };

  //   // 어플리케이션이 로드될 때 한 번 호출
  //   fetchElders();
  // }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

  // FlatList에 사용될 아이템 렌더링 함수

  const [selectedElder, setSelectedElder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function renderElderItem({ item }) {
    // Check if the elder's name contains the search query
    const isMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
  
    if (searchQuery && !isMatch) {
      // If there is a search query but no match, return null to hide the item
      return null;
    }
  
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          setSelectedElder(item);
          setModalVisible(true);
        }}>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text style={styles.itemText}>화분 상태 : {item.plantStatus}</Text>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  }
  
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="검색"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>
        어르신 목록
      </Text>
      <FlatList
        data={elders}
        renderItem={renderElderItem}
        keyExtractor={(item) => item._id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            {selectedElder && (
              <View>
                <Text style={styles.modalText}>이름: {selectedElder.name}</Text>
                <Text style={styles.modalText}>나이: {selectedElder.age}</Text>
                <Text style={styles.modalText}>화분 상태: {selectedElder.plantStatus}</Text>
                <Text style={styles.modalText}>전화번호: {selectedElder.phoneNumber}</Text>
                <Text style={styles.modalText}>특이사항: {selectedElder.specialNote}</Text>
                <TouchableOpacity 
                  activeOpacity={0.8} 
                  style={styles.modalButton}
                  onPress={()=>setModalVisible(false)}>        
                  <Text style={{color:'white'}}>닫기</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('SeniorForm')}>
          <Text style={{ color: 'black' }}>✔ 어르신 정보 추가 </Text>
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
  listItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 5,
  },
  btnArea: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    top: -100,
  },

  btnAdd: {
    flex: 1,
    width: '40%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    top: 20,
  },
  modalText:{
    fontSize: 17,
    color: 'black',
  },
  modalView:{
    margin: 20,
    marginTop:20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:300,
    height:240,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalBackground : {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton:{
    flex: 1,
    width: wp(13),
    height: hp(5),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    top: 20,
    paddig:5,
  },
});

export default SeniorListScreen;
