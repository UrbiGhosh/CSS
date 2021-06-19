import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <a href="#">
          <img src="../images/trello.png" alt="logo" id="logo"></img>
        </a>

        <div>
          <img src="../images/boards.png" alt="boards" id="boards"></img>
          <a href="#">Boards</a>
        </div>

        <div class="search">
          <form action="#">
            <input type="text" placeholder=" " name="search"></input>
            <button>
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="nav-right">
        <a className="fa fa-plus-circle" aria-hidden="true"></a>
        <a className="fa fa-exclamation-circle" aria-hidden="true"></a>
        <a className="fa fa-bell-o" aria-hidden="true"></a>
        <img
          src="../images/profile-pic.jpg"
          alt="profile-pic"
          id="profile-pic"
        ></img>
      </div>
    </div>
  );
}
