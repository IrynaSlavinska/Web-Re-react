import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import formatEventStart from 'helpers/formatEventStart';
import formatEventDuration from 'helpers/formatEventDuration';
import css from './Event.module.css';

const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />

        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />

        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />

        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />

        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

export default Event;
