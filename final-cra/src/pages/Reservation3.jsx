import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReservationTitle from 'components/Reservation/ReservationTitle.js';
import StepNavigation from 'components/Reservation/StepNavigation.js';
import ContinueButton from 'components/ContinueButton.js';
import BackButton from 'components/BackButton.js';
import RoomInfoCard from 'components/Reservation/RoomInfoCard.js';
import styled from 'styled-components';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from '@service/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

// const rooms = [
//   {
//     id: 1,
//     name: '수페리어 (테니스코트 뷰)',
//     description: 'T-WAY 야간 항공 전용 프로모션(1일 3식)',
//     notice:
//       '객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다.',
//     site: '객실 정보와 추가 사항 보기',
//     price: 129.99,
//   },
//   {
//     id: 2,
//     name: '수페리어 (테니스코트 뷰)',
//     description: 'T-WAY 야간 항공 전용 프로모션(1일 3식)',
//     notice:
//       '객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다.',
//     site: '객실 정보와 추가 사항 보기',
//     price: 129.99,
//   },
// ];

const Container = styled.div`
  margin: 137.89px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.313rem;
  margin: 5.625rem 0 15.168rem;
`;

export const Reservation3 = () => {
  // const [imageUrl, setImageUrl] = useState('');
  const [rooms, setRooms] = useState([]);
  const [roomImageList, setRoomImageList] = useState([]);

  useLayoutEffect(() => {
    const getRooms = (async () => {
      const q = query(
        collection(db, 'rooms'),
        where('maxNumberOfPerson', '<=', 5)
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('다른 날짜를 선택해주세요');
      } else {
        const roomList = [];
        const imageList = [];
        querySnapshot.forEach((doc) => {
          const storage = getStorage();
          const storageRef = ref(storage, doc.data().imageUrl);
          getDownloadURL(storageRef)
            .then((url) => {
              imageList.push(url);
            })
            .catch((error) => {
              console.error(error);
            });

          roomList.push(doc.data());
        });
        setRooms(roomList);
        setRoomImageList(imageList);
      }
    })();
  }, []);

  return (
    <ReservationTitle value={'객실'}>
      <StepNavigation
        page={'reservation3'}
        labelArray={['투숙객 선택', '날짜 선택', '객실 선택']}
      ></StepNavigation>
      <Container>
        {rooms.map((room, index) => (
          <RoomInfoCard
            key={room.id}
            name={room.name}
            description={room.description}
            notice={room.notice}
            addInfoSite={room.site}
            price={room.price}
            imageUrl={roomImageList[0]}
            isLast={index === rooms.length - 1}
          />
        ))}
      </Container>
      <ButtonWrapper>
        <BackButton id={'reservation2'} value={'뒤로'} />
        <ContinueButton id={'reservation4'} value={'장바구니 및 결제'} />
      </ButtonWrapper>
    </ReservationTitle>
  );
};

export default Reservation3;
