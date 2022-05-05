import React from "react";

function Header({change, value}){
  return(
    <header className="menu">
      <div className="menu__logo">EmployeeStats</div>
      <input onChange={change} value={value} type="text" placeholder="Поиск..." className="menu__search" />
      <div className="menu-icons">
        <img src="/img/avatar.svg" alt="" className="menu-icons__avatar" />
        <img src="/img/exit.png" alt="" className="menu-icons__avatar" />
      </div>
    </header>
  );
}

export default Header;