import React from "react";
import { GithubOutlined } from "@ant-design/icons";
const Navbar = () => {
  const onOpenGitHub = () =>{
    window.open("https://github.com/jscalderon65/Tic-Tac-Toe");
  }
  return (
    <div className="OptionsView-navbar">
      <div className="OptionsView-navbar-brand">Tic-tac-toe</div>
      <div className="OptionsView-navbar-icons">
        <GithubOutlined onClick={onOpenGitHub}/>
      </div>
    </div>
  );
};
export default Navbar;
