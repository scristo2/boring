import { NextPage } from "next";
import style from "@/styles/Home.module.css";
import { setCookie } from "cookies-next";
import { UseContext } from "@/lib/Appcontext";
import { useRouter } from "next/router";
const Cart : NextPage = () => {

    const context = UseContext();
    const router = useRouter();
    const clickCart = () => {

         router.push("/cart", "/cart", {locale : context.lang})
    }
    
    return(<div  className={`${style.divCart} fixed-bottom`} onClick={clickCart}>
        <i className={`${style.logoCart} bi bi-cart`}></i>
        <p>{context.countCart.cart.totalElements}</p>
    </div>)
}

export default Cart;