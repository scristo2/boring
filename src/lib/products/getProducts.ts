import axios from "axios";
import type { KeysApiProducts, ProductsType } from "./productsType";

const getProducts  = async ()  =>  {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_GETPRODUCTS}`, {headers : {Authorization : `Bearer ${process.env.NEXT_PUBLIC_BEARER_ORFIBESA}`}})
    .then(data => data.data.data)
    .then((result : ProductsType) => {

        if(result.status !== "ok"){

            throw new Error ("no esta ok el status de obtener los productos de la base de datos");
        }

        return result.products;
    })
    .catch(e => {
        console.log(e.message);
        return new Array(0);
    });

    return res;

}

export {getProducts};