import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import { getReviews } from "@/lib/reviews/getReviews";
import { getProducts } from "@/lib/products/getProducts";
type ReviewPageType = {

    lang: string,
    resolved_url: string,
    products : Array<any>,
    comments : Array<any>
}

const ReviewsPage: NextPage<ReviewPageType> = (props) => {

    return (<>
        <Head>
            <title>reviews</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div>
                <Navbar isLogged={false} lang={props.lang} products={props.products} />
            </div>
            <div className='mb-5'>
                <Reviews coments={props.comments} url_render={props.resolved_url} lang={props.lang}/>
            </div>
            <Footer />
        </Layout>
    </>)
}

export default ReviewsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const comments = await getReviews();
    const products = await getProducts();

    return {

        props: {

            lang: context.locale,
            resolved_url: context.resolvedUrl,
            comments : comments,
            products : products
        }
    }
}