const FooterColumn = ({ title, items, setPage }) => {
  const handleClick = (page) => {
    setPage(page);
  };

  const list = items.map((item) => {
    return (
      <li key={item.name}>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.page);
          }}
          href="/"
        >
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <div className="footer__column">
      <h3 className="footer__column-title">{title}</h3>
      <ul className="footer__column-list">{list}</ul>
    </div>
  );
};
export default FooterColumn;
