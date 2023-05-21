
 export type KeysApiProducts = {

    id : number ,
    name : string,
    categorie : string,
    price : string,
    url_image : string,
    type : string,
    url_page : string,
    reference : string
    totalPrice? : number,
    cuantity? : number,
    
}


export type ProductsType = {

    status : string,
    message : string,
    products : KeysApiProducts[]
}

