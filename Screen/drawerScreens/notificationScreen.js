import React, { useState, useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';

const NotificationScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // 초기 알림 목록을 가져오는 비동기 함수 호출
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    // 서버에서 알림 목록을 가져오는 비동기 함수 호출
    try {
      // 서버에서 알림 목록을 가져오는 API 호출 또는 데이터 설정
      const notificationData = [
        { id: '1', content: '   🔔 이철수 어르신 위험!!!' },
        { id: '2', content: '   💊 박순이 어르신 복용 시간입니다.' },
        { id: '3', content: '   🚗 정미경 어르신 외출 예정입니다.' },
      ];
      setNotifications(notificationData);
    } catch (error) {
      console.error('Error while fetching notifications', error);
    }
  };

  const handleNotificationClick = (content) => {
    Alert.alert('', content,[
        {
            text: '전화하기',
            onPress: () => navigation.navigate('SeniorList'),
        },
    ]);
  };

  const renderNotificationItem = ({ item }) => (
    <View style={styles.btnArea}>
        <TouchableOpacity
            style={styles.notificationItem}
            onPress={() => handleNotificationClick(item.content)}>
            <Text style={styles.notificationText}>{item.content}</Text>
        </TouchableOpacity>
    </View>
    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>알림 목록</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
      />
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  btnArea: {
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    top: 10,
  },
  notificationItem: {
    flex: 1,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',    
    backgroundColor: 'white',
    borderWidth: 2,    
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationScreen;
