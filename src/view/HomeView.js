import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetOrdersByDate } from '../store/operations/orderOperations';
import { onSetOrder } from '../store/operations/orderOperations';
import { getRoomsWithStatus } from '../store/selectors/orderSelectors';
import { getName } from '../store/selectors/authSelectors';
import { MyModal } from '../components/Modal';
import styles from './styles.module.css';

export default function Home(props) {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [roomId, setRoomId] = useState(null);

  const rooms = useSelector(getRoomsWithStatus);
  const name = useSelector(getName);

  useEffect(() => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDay()).padStart(2, '0');

    const validDate = `${year}-${month}-${day}`;

    setDate(validDate);

  }, []);

  useEffect(() => {
    dispatch(onGetOrdersByDate(date));
  }, [dispatch, date]);

  const btnHandle = e => {
    setRoomId(e.target.value);

    setIsModal(true);
  }

  const handleSubmit = () => {
    dispatch(onSetOrder({date, roomId}));
    setIsModal(false);
  }

  return (<div className={styles.wrap}>
    <input className={styles.input} type="date" value={date} onChange={e => setDate(e.target.value)}/>
    <ul className={styles.list}>
      {rooms.map(({id, orderId}) => <li key={id} className={styles.li}><button value={id} className={styles.button} onClick={btnHandle} disabled={orderId}>{id}</button></li>)}
    </ul>
    {isModal && <MyModal isUser={name} title={ name ? "Order room?" : "Login first"} handleSubmit={handleSubmit} handleModal={() => setIsModal(false)} />}
  </div>);
}
