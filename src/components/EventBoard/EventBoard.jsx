import css from './EventBoard.module.css';
import Event from 'components/Event/Event';

const EventBoard = ({ events }) => {
  return (
    <div className={css.EventBoard}>
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
    </div>
  );
};

export default EventBoard;
