import wp from "../../assets/wp.svg";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/5492216685672"
      className="block fixed bottom-[30px] right-[30px] z-50"
    >
      <i className="block h-[50px] w-[50px]">
        <img src={wp} alt="" />
      </i>
    </a>
  );
};
export default Whatsapp;
