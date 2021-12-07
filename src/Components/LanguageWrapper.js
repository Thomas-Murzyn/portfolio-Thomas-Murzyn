const LanguageWrapper = (props) => {
  return (
    <div className="language-wrapper">
      <h3>{props.children}</h3>
      <div className="empty-bar">
        <div style={{ width: `${props.fully}%` }} className="full-bar"></div>
      </div>
    </div>
  );
};

export default LanguageWrapper;
