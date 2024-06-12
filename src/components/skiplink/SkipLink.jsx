const SkipLink = ({ href, label }) => {
  return (
    <a href={href} className="skiplink">
      {label}
    </a>
  );
};
export default SkipLink;
