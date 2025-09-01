import styles from './EventItem.module.scss';
import {useNavigate, useParams} from 'react-router-dom';

const EventItem = ({ event }) => {
  const {
    title,
    desc: description,
    'img-url': image,
    'start-date': date,
  } = event;

  const {eventId} = useParams();

  // 새로고침 없이 페이지 이동
  const navigate = useNavigate();

  const deleteHandler = e => {
    // 서버에 DELETE 요청, 즉시 실행 함수
    (async () => {
      const response = await fetch(`http://localhost:9000/api/events/${eventId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // 목록 페이지로 리다이렉트
        navigate('/events');
      }
    })();
  };

  return (
    <article className={styles.event}>
      <img
        src={image}
        alt={title}
      />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <a href='#'>Edit</a>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
