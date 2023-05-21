import { NextPage } from "next";
import Link from "next/link";
import Cart from "./cart/Cart";
import { UseContext } from "@/lib/Appcontext";
const Footer: NextPage = (props) => {

    const context = UseContext();

    return (

        <div className="container">
            {!context.isLoading && <Cart/>}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}
                {/* Right */}
                <div>
                    <Link href="" className="me-4 text-reset">
                        <i className="bi bi-facebook" />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <i className="bi bi-twitter" />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <i className="bi bi-google" />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <i className="bi bi-instagram" />
                    </Link>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}
            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3" />Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <Link href="#!" className="text-reset">Angular</Link >
                            </p>
                            <p>
                                <Link  href="#!" className="text-reset">React</Link >
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Vue</Link >
                            </p>
                            <p>
                                <Link  href="#!" className="text-reset">Laravel</Link >
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link  href="#!" className="text-reset">Pricing</Link >
                            </p>
                            <p>
                                <Link  href="#!" className="text-reset">Settings</Link >
                            </p>
                            <p>
                                <Link  href="#!" className="text-reset">Orders</Link >
                            </p>
                            <p>
                                <Link  href="#!" className="text-reset">Help</Link >
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="bi bi-house-door-fill me-3" /> New York, NY 10012, US</p>
                            <p>
                                <i className="bi bi-envelope me-3" />
                                info@example.com
                            </p>
                            <p><i className="bi bi-phone me-3" /> + 01 234 567 88</p>
                            <p><i className="bi bi-telephone-inbound me-3" /> + 01 234 567 89</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}
            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023- Copyright:
                <Link className="text-reset fw-bold" href="https://orfibesa.com">orfibesa.com</Link>
            </div>
            {/* Copyright */}
        </div>
    );
}

export default Footer;