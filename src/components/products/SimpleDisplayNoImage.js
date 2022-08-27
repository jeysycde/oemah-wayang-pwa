const SimpleDisplayNoImage = ({ children }) => {
  return (
    <div className={"flex-auto w-32 h-36 p-4 bg-[#DAE2FF] rounded-3xl mx-1"}>
      <div className={"text-center"}>
        <p>{children}</p>
      </div>
    </div>
  );
};
export default SimpleDisplayNoImage;
