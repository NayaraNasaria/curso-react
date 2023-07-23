import logo from "../assets/logo.png"

const NavBar = () => {

    return(
        <div className="NavBar">
        <header className="NavBar__style">
        <ul className="itens__navbar">
          <img className="logo" src={logo} alt="logotipo" />
          <li>Home</li>
          <li>Testes</li>
          <li>Sobre</li>
        </ul>
      </header>
        </div>
    )
}

export default NavBar;