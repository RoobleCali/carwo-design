import logo from "../assets/logo.png";

function Header() {
  return (
    <div>
      {/* left */}
      <div>
        <img src={logo} alt="" />
      </div>
      {/* right */}
      <div></div>
    </div>
  );
}

export default Header;
