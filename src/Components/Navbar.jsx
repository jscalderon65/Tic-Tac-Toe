import React from 'react'
import { GithubOutlined } from "@ant-design/icons";
const Navbar = () => {
    return (
<div className="OptionsView-navbar">
        <div className="OptionsView-navbar-brand">Tic-tac-toe</div>
        <div className="OptionsView-navbar-icons">
          <GithubOutlined />
        </div>
      </div>
    )
}
export default Navbar;
