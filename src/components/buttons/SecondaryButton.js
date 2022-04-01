const SecondaryButton = (props) => {
  return (
    <>
      <button className="my-4 font-medium text-base text-blue-500 bg-blue-50 duration-500 cursor-pointer hover:bg-blue-100 py-2 px-4 rounded-lg">
        {props.label}
      </button>
    </>
  );
};
export default SecondaryButton;
