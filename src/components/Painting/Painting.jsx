import defaultImg from '../default.jpg';

export default function Painting({
  imgUrl = defaultImg,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width={400} className="painting-img" />
      <h3 className="painting-subtitle">{title}</h3>
      <p className="painting-text">
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p className="painting-text">Ціна: {price}</p>
      <p className="painting-text">
        Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'}
      </p>
      <button type="button" className="painting-btn">
        Додати в кошик
      </button>
    </div>
  );
}
