import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1>Lookeados</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                Remeras
                            </li>
                            <li className="nav-item">
                                Camisas
                            </li>
                            <li className="nav-item">
                                Pantalones
                            </li>
                            <li className="nav-item">
                                Calzado
                            </li>
                            <li className="nav-item">
                                Accesorios
                            </li>

                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar