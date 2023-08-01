import React, { useEffect, useState } from "react";
import './PlanScreen.css';
import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const PlanScreen = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
    const q = query(collection(db, "products"), where("capital", "==", true));

     collection('products').where("active", "==", true)
     .getDocs()
     .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").getDocs();
            priceSnap.docs.forEach((price) => {
               products[productDoc.id].prices = {
                 priceId: price.id,
                 priceData: price.data(),
               }; 
            });
        });
        setProducts(products);
     })
   }, []);

console.log(products);
    return (
      <div>
       
      </div>
   )
}

export default PlanScreen;


