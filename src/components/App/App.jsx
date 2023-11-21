import EventBoard from '../EventBoard/EventBoard';

import upcomingEvents from '../../data/upciming-events.json';

import PageTitle from 'components/PageTitle/PageTitle';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle title="24th Core Worlds Coalition Conference" />

      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
