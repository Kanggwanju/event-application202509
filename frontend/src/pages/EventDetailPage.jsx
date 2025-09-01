import React from 'react';
import {useLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem.jsx';


// /events/:id
const EventDetailPage = () => {

  // const {eventId} = useParams();

  const detailEvent = useLoaderData();

  return (
    <>
      <EventItem event={detailEvent} />
    </>
  );
};

export default EventDetailPage;