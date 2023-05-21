// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getDoc, doc, getFirestore, collection, getDocs, orderBy, query} from "firebase/firestore";
import { cloneElement } from "react";
import { KeysApiProducts } from "./products/productsType";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8cfNqtwJUwpHlu0ZMZxALDDpQluCfJE0",
  authDomain: "orfibesa.firebaseapp.com",
  projectId: "orfibesa",
  storageBucket: "orfibesa.appspot.com",
  messagingSenderId: "972037780596",
  appId: "1:972037780596:web:4c834704b00b9b2de44d21",
  measurementId: "G-PCKHZ1WTCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);



export async function getProductsFirebase() : Promise<KeysApiProducts[]>{

  try{

    const q = query(collection(db, "products"), orderBy("id", "asc"));

    const docRef =  await getDocs(q); //getDocs(collection(db, "products"));


    if(!docRef.empty){

        const productsList : any[] = [];

        docRef.forEach((e) => {

           productsList.push(e.data());
        });


        return productsList;
    
    }else{

        throw Error("no existe!!");
    }
  
 }catch(e){

     //console.log("error: ", e);
     return [];
 }
   

}