import { NextPage } from "next";
import Image from "next/image";

type ImageProps = {

    src : string,
    alt : string,
    width : number,
    height : number

}

const SizeImage : NextPage<ImageProps>  = (props) => {

    return(<Image width={props.width} height={props.height} src={props.src} priority alt={props.alt}/>);
}

export default SizeImage;