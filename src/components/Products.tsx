import { NextPage } from "next";
import FillImage from "./FillImage";
import Link from "next/link";
import Reviews from "./Reviews";
import { KeysApiProducts } from "@/lib/products/productsType";
import { KeysApiReviews } from "@/lib/reviews/reviewsType";
import SizeImage from "./SizeImage";
import AddCartButton from "./cart/AddCartButton";
import { UseContext } from "@/lib/Appcontext";
type ProductsList = {

    products: Array<KeysApiProducts>,
    coments: Array<KeysApiReviews>
}

const Products: NextPage<ProductsList> = ({ products, coments }) => {

   const context = UseContext();

    return (

        <section className="">
            <h4 className="text-bold mx-4 mb-5">Productos</h4>
            <div className="text-center">
                <div className="row justify-content-center m-0 p-0">
                    {

                        products.length < 1 ? <div>
                            <SizeImage alt="error image" src="/error.png" width={200} height={200} />
                            <p className="fw-bold my-3">ERROR AL CARGAR LOS PRODUCTOS</p>
                        </div> : products.map((e, i) => {

                            return (<div key={i} className="col-lg-3 col-md-6 mb-4 ">
                                <div className="card">
                                    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                        <div className="position-relative w-100 " style={{ height: '550px' }}>
                                            <FillImage src={e.url_image} alt="Image product" />
                                        </div>
                                        <a href="#!">
                                            <div className="mask">
                                                {
                                                    e.type === "new" ? <div className="d-flex justify-content-start align-items-end h-100">
                                                        <h5><span className="badge bg-dark ms-2">NEW</span></h5>
                                                    </div> : <div className="d-flex justify-content-start align-items-end h-100">
                                                        <h5><span className="badge bg-primary ms-2">bestseller</span></h5>
                                                    </div>
                                                }

                                            </div>
                                            <div className="hover-overlay">
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <a href="" className="text-reset">
                                            <h3 className="card-title mb-2">{e.name}</h3>
                                        </a>
                                        <a href="" className="text-reset ">
                                            <p>{e.categorie}</p>
                                        </a>
                                        <h6 className="mb-3 price">{e.price}€</h6>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Link href={e.url_page} className={`btn btn-warning mb-3 mx-3 ${context.isLoading ? "d-none" : ""}`}>Comprar ahora</Link>
                                            <div>
                                               <AddCartButton reference={e.reference}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            <Reviews coments={coments} />
        </section>
    )
}

export default Products;