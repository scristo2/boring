
 export type KeysApiReviews = {

    id : number ,
    username_receipt : string ,
    url_image : string,
    data_published : string,
    starts : string,
    message : string, 
    product : string
}

export type ReviewsType = {

    status : string,
    message : string,
    reviews : KeysApiReviews
}