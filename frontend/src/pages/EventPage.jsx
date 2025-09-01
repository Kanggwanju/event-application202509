import React from 'react';
import {useLoaderData} from 'react-router-dom';
import EventList from '../components/EventList.jsx';

const EventPage = () => {

  // loader가 리턴한 데이터 가져오기
  const eventList = useLoaderData();

  // const [eventList, setEventList] = useState([]);

  // // API call
  // const fetchEvents = async () => {
  //   const response = await fetch('http://localhost:9000/api/events');
  //   const data = await response.json();
  //   console.log(data);
  //
  //   setEventList(data);
  // };

  // useEffect(() => {
  //   console.log('서버에서 데이터 페칭!');
  //   fetchEvents();
  // }, []);
  //
  // console.log('이벤트페이지 렌더링 수행중...');

  return (
    <>
      <EventList eventList={eventList} />
    </>
  );
};

export default EventPage;