import css from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={css.title}>{title}</h1>;
};

export default PageTitle;
