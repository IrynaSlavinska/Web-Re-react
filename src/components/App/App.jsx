import PageTitle from '../PageTitle/PageTitle';
import EventBoard from '../EventBoard/EventBoard';

import upcomingEvents from '../../data/upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
