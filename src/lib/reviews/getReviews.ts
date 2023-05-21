import axios from "axios";
import type { ReviewsType } from "./reviewsType";

const getReviews = async () => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_GETREVIEWS}`, {headers : {Authorization : `Bearer ${process.env.NEXT_PUBLIC_BEARER_ORFIBESA}`}})
    .then(data => data.data.data)
    .then((result : ReviewsType) => {

        if(result.status !== "ok"){

            throw new Error ("no esta ok el status de obtener los reviews");
        }

        return result.reviews;
    })
    
    .catch(e => {
        console.log(e.message);
        return [];
    });

    return res;

}

export {getReviews};