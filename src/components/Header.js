
function Header(props){
  return(
    <header className="menu">
      <div className="menu__logo">EmployeeStats</div>
      <input type="text" placeholder="Поиск..." className="menu__search" />
      <div className="menu-icons">
        <img src="/img/avatar.svg" alt="" className="menu-icons__avatar" />
        <img src="/img/exit.png" alt="" className="menu-icons__avatar" />
      </div>
    </header>
  );
}

export default Header;