import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { UseContext } from "@/lib/Appcontext";
import SomeErrorModal from "@/components/warnings/SomeErrorModal";
require("isomorphic-fetch");

type PropsAddcartButton = {

    reference: string
}

const AddCartButton: NextPage<PropsAddcartButton> = (props) => {

    const context = UseContext();
    //const [isLoading, setIsLoding] = useState<boolean>(false);

    const showError = useRef<HTMLInputElement>(null);



    const addCart = async () => {
        //setIsLoding(true);
        context.setIsLoading(true);

        const res = await fetch(`/api/auth/addcart/${props.reference}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: 1,
            })
        }).then(data => data.json())
            .then(result => {
                if (result.status === "error") {

                    //no se ha podido añadir al carro

                    throw Error(result.message)
                }

                const data = context.countCart.cart.products;

                data.push(props.reference);

                //añado 1 al carrito de lo que ya tenga
                context.setCountCart({ cart: { totalElements: context.countCart.cart.totalElements + 1, totalPrice: 0, products: data } });

                console.log("producto añadido correctamente");
            })
            .catch(e => {
                console.log('no se ha podido añadir el producto al carrito, motivo :  ',e.message);
                showError.current?.click();
                return false;
            });

        context.setIsLoading(false);
        //setIsLoding(false)

    }

    return (<div>
        <input type="button" value={"Añadir al  carro"} className={`${context.isLoading ? "d-none" : ""} btn btn-dark mb-3`} onClick={addCart} />
        <div className={`spinner-border text-primary ${context.isLoading ? "" : "d-none"}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
         {/*dispay none porque no tiene que verse*/}
         <input ref={showError} type="button" className={`btn btn-primary d-none`} data-bs-toggle="modal" data-bs-target="#errorModal" value={"show error"} />
         <SomeErrorModal message="No se ha podido añadir este producto al carrito.Intentalo de nuevo mas tarde!"/>
    </div>)
}

export default AddCartButton;