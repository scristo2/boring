import { NextPage } from "next";
import SizeImage from "./SizeImage";
import type { KeysApiReviews } from "@/lib/reviews/reviewsType";
import { useEffect, useState } from "react";
import Link from "next/link";
import style from "../../src/styles/Home.module.css";

type ReviewsProps = {

    coments: Array<KeysApiReviews>,
    url_render? : string,
    lang? : string
}



const Reviews: NextPage<ReviewsProps> = ({ coments, url_render, lang }) => {

    const [onestar, setonestar] = useState<number>(0);
    const [twostar, settwostar] = useState<number>(0);
    const [threestar, setthreestar] = useState<number>(0);
    const [fourstar, setfourstar] = useState<number>(0)
    const [fivestar, setfivestar] = useState<number>(0);

    const [showReviewsNumber, setShowReviewNumber] = useState<number>(3);


    const getStarsTotally = () => {

        coments.map((e, i) => {

            switch (parseInt(e.starts)) {

                case 1:
                    setonestar(value => value + 1);
                    break;

                case 2:
                    settwostar(value => value + 1);
                    break;

                case 3:
                    setthreestar(value => value + 1);
                    break;

                case 4:
                    setfourstar(value => value + 1);
                    break;

                case 5:
                    setfivestar(value => value + 1);
                    break;
            }
        });


    }


    const getPorcentageStarsBar = (index: number): number => {

        let result;

        result = (index / coments.length) * 100;

        if (result > 0 && result <= 25) {

            result = 25;

        } else if (result >= 25 && result <= 50) {

            result = 50;

        } else if (result >= 50 && result <= 75) {

            result = 75;

        } else if (result >= 75 && result <= 100) {

            result = 100;

        } else {

            result = 0;
        }

        return result;


    }


    const showMoreReviews = () => {

        setShowReviewNumber(e => e + 1);
    }


    useEffect(() => {

        getStarsTotally();

        return () => {
            //clean up
            setonestar(0);
            settwostar(0);
            setthreestar(0);
            setfourstar(0);
            setfivestar(0);
            setShowReviewNumber(3);
        }

    }, []);

    return (
        <>
            <hr className={`"mt-5" ${url_render ? "d-none" : ""}`} />
            <section className="reviews container my-5 ">
                { 
                   coments.length > 0 ?
                    <>
                      <div><h5>{coments.length} reviews</h5></div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                            </div>
                            <div className="progress w-50 mx-3">
                                <div className={`progress-bar w-${getPorcentageStarsBar(fivestar)}`} role="progressbar" aria-valuenow={getPorcentageStarsBar(fivestar)} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="mx-3">
                                <p className="link-primary">({fivestar})</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                            </div>
                            <div className="progress w-50 mx-3">
                                <div className={`progress-bar w-${getPorcentageStarsBar(fourstar)}`} role="progressbar" aria-valuenow={getPorcentageStarsBar(fourstar)} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="mx-3">
                                <p className="link-primary">({fourstar})</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                            </div>
                            <div className="progress w-50 mx-3">
                                <div className={`progress-bar w-${getPorcentageStarsBar(threestar)}`} role="progressbar" aria-valuenow={getPorcentageStarsBar(threestar)} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="mx-3">
                                <p className="link-primary">({threestar})</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                            </div>
                            <div className="progress w-50 mx-3">
                                <div className={`progress-bar w-${getPorcentageStarsBar(twostar)}`} role="progressbar" aria-valuenow={getPorcentageStarsBar(twostar)} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="mx-3">
                                <p className="link-primary">({twostar})</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-5">
                            <div className="">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                            </div>
                            <div className="progress w-50 mx-3">
                                <div className={`progress-bar w-${getPorcentageStarsBar(onestar)}`} role="progressbar" aria-valuenow={getPorcentageStarsBar(onestar)} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="mx-3">
                                <p className="link-primary">({onestar})</p>
                            </div>
                        </div>
                        <hr />
                    </> : ""
                }
                <div>
                    {
                        coments.length < 1 ? <div className="text-center">
                            <div>
                                <SizeImage alt="error image" src="/error.png" width={200} height={200} />
                                <p className="fw-bold my-3">ERROR AL CARGAR LOS COMENTARIOS</p>
                            </div>
                        </div> : coments.slice(0, showReviewsNumber).map((e: KeysApiReviews, i) => {

                            return (
                                <div key={i} className=" p-2 mb-4">
                                    <div className="d-flex align-items-center mx-3">
                                        <SizeImage src={e.url_image} alt="User avatar" width={40} height={40} className="rounded-circle mx-3" />
                                        <div><h6>{e.username_receipt}</h6></div>
                                        <div className="mx-3 d-flex">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <p className="mx-1 text-warning">{e.starts}.0</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.product_reviews}><p>{e.product}</p></div>
                                        <div className="my-3"><p>{e.message}</p></div>
                                        <div><p className="text-muted">{e.data_published}</p></div>
                                    </div>
                                </div>)
                        })


                    }
                    <div className="text-center">
                        {coments.length > 0 && !url_render ? <Link href={"/reviews"} locale={lang} >ver todos</Link> : <input type="button" value={"ver mas"} className={`btn btn-warning ${showReviewsNumber == coments.length ? "d-none" : ""}`} onClick={showMoreReviews}/>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews;