import { withSessionRoute } from "@/lib/auth/session";
import { NextApiRequest, NextApiResponse } from "next";
import { SessionUserType } from "@/lib/auth/sessionusertype";


export default withSessionRoute(handler);


async function handler(req: NextApiRequest, res: NextApiResponse) {

        const lostTime = await new Promise((resolve) => {

                setTimeout(() => {
                        resolve("");
                }, 1000);
        })

        const bearerToken = (req.headers.authorization || "").split("Bearer ").at(1);

        if (req.method === "POST" || !req.session?.user) {

                if (process.env.NEXT_PUBLIC_BEARER_ORFIBESA !== bearerToken) {

                        return res.status(200).json({ status: "error", message: "you dont have permission" });
                }


                const sessionUser = req.session.user;


                if (req.body?.action === "delete") {

                        const newListproducts = sessionUser?.cart.products;

                        if (!req.body?.position.toString()) {

                                return res.status(200).json({ status: "error", message: "no esta definido el index del elemento del carrito a borrar" });
                        }

                        const test = newListproducts?.indexOf(req.body?.position);

                        if(test! > -1){

                                newListproducts?.splice(test!, 1);
                                const newCartUser: SessionUserType = {

                                        cart: {
        
                                                totalElements: (sessionUser!.cart.totalElements - 1),
                                                products: newListproducts!,
                                                totalPrice: 0
                                        }
                                }
        
                                req.session.user = newCartUser;
                                await req.session.save();
        
                                return res.status(200).json({ status: 'ok', message: "borrar del carrito correctamente" });
                        }


                        return res.status(200).json({status : "error", message : "el producto seleccionado no se puede borrar!"})


                } else if (req.body?.action === "add") {
                        if (!req.body?.reference.toString()) {

                                return res.status(200).json({ status: "error", message: "no esta definido la referencia del producto a añadir al carrito" });
                        }
                        const newListproducts = sessionUser?.cart.products;
                        newListproducts?.push(req.body?.reference);

                        

                        const newCarUser: SessionUserType = {

                                cart: {

                                        products: newListproducts!,
                                        totalElements: (sessionUser!.cart.totalElements + 1),
                                        totalPrice: (sessionUser!.cart.totalPrice)
                                }
                        }

                        req.session.user = newCarUser;

                        await req.session.save();

                       // console.log(req.session.user.cart);

                        return res.status(200).json({ status: 'ok', message: "producto añadido correctamente" })
                }

                return res.status(200).json({ status: 'error', message: "todo bien pero no se ha seleccioando ninguna accion" })


        } else {

                return res.status(200).json({ status: 'error', message: "Method not allowed" })
        }


}