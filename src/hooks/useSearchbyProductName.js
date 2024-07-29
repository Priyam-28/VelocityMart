import {  collection, getDocs, query, where } from 'firebase/firestore';
import  { useState } from 'react'
import { firestore } from '../firebase/firebase';
import toast from 'react-hot-toast';

export default function useSearchbyProductName() {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const getProductName = async (product) => {
        setIsLoading(true);
        setProduct(null);
        try {
            const q = query(collection(firestore, "items"), where("title", "==", product));
            const snapshot = await getDocs(q);
            if (snapshot.empty) return
            toast.error("User not Found");

            snapshot.forEach((doc) => {
                setProduct(doc.data());
            })




        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setIsLoading(false);
        }

    }
    return {isLoading,getProductName,product,setProduct}
}
