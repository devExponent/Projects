const TabButton = ({ children, selected, ...props }) => {
  return (
    <div>
      <li>
        <button className={selected ? "active" : null} {...props}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;
