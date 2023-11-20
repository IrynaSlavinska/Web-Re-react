import Painting from '../Painting/Painting';
import '../../styles/01-components.css';

function PaintingsList({ paintings }) {
  return (
    <ul className="paintings-list">
      {paintings.map(painting => (
        <li key={painting.id} className="paintings-item">
          <Painting
            imgUrl={painting.url}
            title={painting.title}
            author={painting.author.tag}
            profileUrl={painting.author.url}
            price={painting.price}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingsList;
