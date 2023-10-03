import { logo } from "../../assets/";

const CustomNavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/Aymannagyahmed")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
    </>
  );
};

export default CustomNavBar;
