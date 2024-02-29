import logo from "../assets/logo.svg";
import AieaLogo from "../assets/Aiea logo.svg";
import Cart from "../assets/cart.svg";
import { useState } from "react";


import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <div className="navbar-container fixed-nav" >
        <nav>
          <div className="logo-side">
            <img src={logo} alt="Logo" />
            <div className="menu" onClick={() => setMenu(!menu)}>
              {menu ? (
                <i className=" menu-icon fa fa-bars" aria-hidden="true" />
              ) : (
                <div>
                  <i className=" menu-icon fa-solid fa-xmark"></i>
                  <Dropdown />
                </div>
              )}

              <h3>Menu</h3>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="What can we help you find today?"
              />
              <i className="fa fa-search" aria-hidden="true" />
            </div>
          </div>
          <div className="login-side">
            <div className="area">
              <img src={AieaLogo} alt="" />
              <h1>Aiea</h1>
            </div>
            <div className="cart">
              <img src={Cart} alt="" />
              <h1>Cart</h1>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="second-navbar navbar-container "
        style={{ marginTop: "70px" }}
      >
        <nav className="nav-second">
          <ul>
            <div>Top Deals</div>
            <div>Deal of the Day</div>
            <div>Yes,Best Buy Sells That</div>
            <div>My Best Buy Memberships</div>
            <div>More</div>
          </ul>
          <ul className="right-section">
            <div>
              <a href="">
                <i className="fa-regular fa-user" />
                Account
                <i className="fa-solid fa-chevron-down" />
              </a>
            </div>
            <div>
              <a href="">
                Recently Viewed
                <i className="fa-solid fa-chevron-down" />
              </a>
            </div>
            <div>
              <a href="">
                Order Status
                <i className="fa-solid fa-chevron-down" />
              </a>
            </div>
            <div>
              <a href="">
                Saved Items
                <i className="fa-solid fa-chevron-down" />
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <ul id="dropdown-list" className="hide">
          <div className="top-menu">
            <a href="#">Deals</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Support & Services</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Brands</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <hr />
          <h5>Shop By Department</h5>
          <div className="top-menu">
            <a href="#">Appliances</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">TV & Home Theater</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Computers & Tablets</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Cell Phones</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Audio</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Video Games</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Cameras</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Movies & Music</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="top-menu">
            <a href="#">Outdoor Living</a>
            <i className="fa-solid fa-chevron-right" />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
