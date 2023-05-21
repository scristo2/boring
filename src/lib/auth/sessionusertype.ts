
export type Cart = {

     totalElements : number,
     products : Array<string | null>,
     totalPrice : number
}

 export type SessionUserType = {

    cart : Cart
}

 //cuando se crea todo de cero;
 const dataUserSession : SessionUserType = {

    cart : {
        totalElements : 0,
        products : [],
        totalPrice : 0
    }
}

export {dataUserSession};