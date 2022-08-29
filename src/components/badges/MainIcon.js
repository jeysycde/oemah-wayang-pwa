const MainIcon = ({ children, padding = "p-3" }) => {
  return (
    <span className={`${padding} bg-gray-100 mx-1 rounded-lg`}>{children}</span>
  );
};
export default MainIcon;
