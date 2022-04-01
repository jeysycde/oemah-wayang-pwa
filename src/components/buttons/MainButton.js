const MainButton = (props) => {
  return (
    <>
      <button
        className={`p-2 text-white bg-blue-500 rounded-lg ${props.className}`}
      >
        {props.label}
      </button>
    </>
  );
};
export default MainButton;
