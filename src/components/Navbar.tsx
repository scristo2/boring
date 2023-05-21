import { NextPage } from "next";
import Link from "next/link";
import SizeImage from "./SizeImage";
import CreateAccountModal from "./warnings/CreateAccountModal";
import { useRouter } from "next/router";
import { KeysApiProducts } from "@/lib/products/productsType";
import { useEffect } from "react";

type Navbar = {

    isLogged: boolean,
    products: Array<KeysApiProducts>,
    lang: string
}

const Navbar: NextPage<Navbar> = (props) => {

    const router = useRouter();


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
                            <Link className="nav-link active" aria-current="page" href="/" locale={props.lang}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Todos los productos
                            </a>
                            <ul className="dropdown-menu">
                                {
                                  props.products.length < 1 ? <li><p className="dropdown-item fw-bold">Ha ocurrido un error</p></li> : props.products.map((e, i) => {

                                        return (<li key={i}><Link className="dropdown-item" href={e.url_page}>{e.name}</Link></li>)
                                    })
                                }
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Preguntas frecuentes
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">¿quienes somos?</Link></li>
                                <li><Link className="dropdown-item" href="#">¿como crearme una cuenta?</Link></li>
                                <li><Link className="dropdown-item" href="#">¿como se paga y que opciones de pago tenemos?</Link></li>
                                <li><Link className="dropdown-item" href="#">¿enviais a todas las partes del mundo?</Link></li>
                                <li><Link className="dropdown-item" href="#">¿como devolver un producto?</Link></li>
                                <li><Link className="dropdown-item" href="#">¿como tratamos vuestros datos <br /> despues de realizar un pedido?</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
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
                            <input className="me-2 btn btn-success" type="button" value={"Inicar sesion"} onClick={() => router.push("/login", "", { locale: props.lang })} />
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createAccountModal">
                                Crear cuenta
                            </button>
                            <CreateAccountModal />
                        </div>
                    }
                </div>
            </div>
        </nav>

    </>)
}

export default Navbar;