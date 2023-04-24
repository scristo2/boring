import { NextPage } from "next";
import Link from "next/link";
import SizeImage from "./SizeImage";

type Navbar = {

    isLogged: boolean,
}

const Navbar: NextPage<Navbar> = (props) => {

    return (<>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href={"/"}>
                    <SizeImage src="/logo.png" alt="logo principal" width={32} height={32} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    {
                        props.isLogged ? <div className="d-flex">
                            <p className="me-4">Hola sergio!</p>
                            <div className="dropdown me-4">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mi cuenta
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">pedidos</a></li>
                                    <li><a className="dropdown-item" href="#">cuenta</a></li>
                                    <li><a className="dropdown-item" href="#">cerrar sesion</a></li>
                                </ul>
                            </div>
                        </div> : <div className="d-flex">
                            <input className="me-2 btn btn-success" type="button" placeholder="Search" value={"Inicar sesion"} />
                            <input type="button" value={"Crear cuenta"} className="btn btn-primary me-2" />
                        </div>
                    }
                </div>
            </div>
        </nav>

    </>)
}

export default Navbar;