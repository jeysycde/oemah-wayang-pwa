import MainIcon from "../badges/MainIcon";

const SimpleNavbar = () => {
  return (
    <div className={"flex justify-between mt-12"}>
      <div>
        <div>
          <span className={"font-light text-lg"}>Hey there,</span>
        </div>
        <div>
          <h1 className={"font-semibold text-xl"}>Welcome back</h1>
        </div>
      </div>
      <div className={"my-auto"}>
        <MainIcon>
          <i className="fa-solid fa-share-nodes"></i>
        </MainIcon>
        <MainIcon>
          <i className="fa-solid fa-moon"></i>
        </MainIcon>
      </div>
    </div>
  );
};

export default SimpleNavbar;
