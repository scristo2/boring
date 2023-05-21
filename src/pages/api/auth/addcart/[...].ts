import { withSessionRoute } from "@/lib/auth/session";
import { NextApiRequest, NextApiResponse } from "next";
import { SessionUserType } from "@/lib/auth/sessionusertype";


export default withSessionRoute(handler);


async function handler(req : NextApiRequest, res : NextApiResponse){

    
    const lostTime = await new  Promise((resolve) => {

        setTimeout(() => {
            resolve("");
        }, 1000);
    })


    const session = req.session;


    if(!session.user){


        return res.status(200).json({status : 'error', message : "no hat registro se sesion"});
    
    }else{


        const product = req.url?.split("/");
        //product![4]
        
        if(product![4].toString() !== process.env.NEXT_PUBLIC_ASADOR_REFERENCE?.toString() && product![4].toString() !== process.env.NEXT_PUBLIC_APOYADERO_REFERENCE?.toString()){

            return res.status(200).json({status : 'error', message : `la referencia del producto no es valida`});
        }
        
        let sessionProducts : Array<any> = session.user.cart.products;
        sessionProducts.push(product![4]);
        
        const sessionData : SessionUserType = {
    
           cart : {
    
               totalElements : session.user.cart.totalElements + 1,
               products : sessionProducts,
               totalPrice : 0
           }
        }

        session.user = sessionData;

        await session.save();

        return res.status(200).json({status : 'ok', message : 'producto añadido al carrito correctamente'});
    }
    

   
}