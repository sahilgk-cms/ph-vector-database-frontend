import phLogo from "../assets/precison-health-logo-blue-text-white-bg.png";
import Image from "react-bootstrap/Image";

function Logo() {
  return (
    <>
      <Image
        src={phLogo}
        alt="PH Logo"
        style={{
          width: "15rem",
          marginLeft: "auto",
          marginBottom: "0.2rem",
          marginTop: "0rem",
          marginRight: "auto",
          paddingBottom: "0rem",
          display: "block",
        }}
      />
    </>
  );
}

export default Logo;
