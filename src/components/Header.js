import { LOGO_URL } from "../utils/constants";
// import Logo from "../assets/img/2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInUser = () => {
  return false;
};

// const Title = () => {
//   <a href="/">
//     <img className="h-28" alt="logo" src={Logo}></img>
//   </a>;
// };

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isOnline, setIsOnline] = useState();
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg sm:bg-pink-50 md:bg-yellow-100">
      {/* <Title /> */}
      <div className="logo-container">
        <img className="h-28 p-2" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About Us</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
