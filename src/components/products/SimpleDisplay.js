const SimpleDisplay = (props) => {
  return (
    <div
      className={"inline-block w-40 h-56 mx-1 relative rounded-3xl"}
      style={{
        backgroundImage: `url("${
          process.env.PUBLIC_URL + "/banners/example.webp"
        }")`,
      }}
    >
      <div className={"flex justify-center"}>
        <div className={"absolute bottom-2"}>
          <h4 className={"font-semibold text-white text-lg"}>{props.label}</h4>
        </div>
      </div>
    </div>
  );
};
export default SimpleDisplay;
