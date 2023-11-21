import { Board } from './EventBoard.styled';
import Event from 'components/Event/Event';

const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => {
        return (
          <Event
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
          />
        );
      })}
    </Board>
  );
};

export default EventBoard;
