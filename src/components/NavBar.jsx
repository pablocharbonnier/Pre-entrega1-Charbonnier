import Brand from "./Brand"
import CartContainer from "./CartContainer"
import CategoryItem from "./CategoryItem"
import MenuButton from "./MenuButton"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Brand />
          <MenuButton />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
               <CategoryItem isActive ={false} name="Smartwatch" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive ={false} name="Auriculares" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive ={false} name="Gamer" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive ={false} name="Computacion" />
              </li>
              <li className="nav-item ">
              <CategoryItem isActive ={false} name="Accesorios" />
              </li>

            </ul>
          </div>
          <CartContainer />
        </div>

      </nav>
    )
}

export default NavBar;