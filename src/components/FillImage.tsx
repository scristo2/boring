import { NextPage } from "next";
import Image from "next/image";

type ImageProps = {

    src : string,
    alt : string,

}

const FillImage : NextPage<ImageProps>  = (props) => {

    return(<Image fill src={props.src} priority alt={props.alt}/>);
}

export default FillImage;