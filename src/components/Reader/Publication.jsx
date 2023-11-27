const Publication = ({ title, text }) => {
  return (
    <article className="ArticlePage">
      <h2 className="ArticleTitle">{title}</h2>
      <p className="ArticleText">{text}</p>
    </article>
  );
};

export default Publication;
