import Section from './Section/Section';
import PaintingsList from './PaintingsList/PaintingsList';
import paintings from '../data/paintings.json';

export const App = () => {
  return (
    <div className="container">
      <Section title={'Top of the week'}>
        <PaintingsList paintings={paintings} />
      </Section>

      <Section title={'Best items'}>
        <PaintingsList paintings={paintings} />
      </Section>
    </div>
  );
};
