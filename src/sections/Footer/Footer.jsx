import iconTel from "../../assets/iconTelFooter.svg"
import iconUbix from "../../assets/iconUbic.svg"

const Footer = () => {
  return (
    <footer className="footer flex flex-row bg-blue-950 h-24">
      <img src={iconTel} alt="" className="p-3 h-[50px]" />
      <img src={iconUbix} alt="" className="p-3 h-[50px]" />
    </footer>
  );
}
export default Footer