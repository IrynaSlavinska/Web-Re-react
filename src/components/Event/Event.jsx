import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import formatEventStart from 'helpers/formatEventStart';
import formatEventDuration from 'helpers/formatEventDuration';
import { EventCard, EventName, EventInfo, Chip } from './Event.styled';

const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <EventCard>
      <EventName>{name}</EventName>
      <EventInfo>
        <FaMapMarkerAlt />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt />

        {formatedStart}
      </EventInfo>
      <EventInfo>
        <FaClock />
        {duration}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </EventCard>
  );
};

export default Event;
