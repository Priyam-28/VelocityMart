import { useState } from "react";
import toast from 'react-hot-toast';
import { firestore } from "../firebase/firebase";
import { collection,  getDocs, query, where } from "firebase/firestore";

export default function useFilterByCategory() {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryItems, setCategoryItems] = useState([]);

    const sortByCategory = async (category) => {
        setIsLoading(true);
        setCategoryItems([]); // Clear previous data

        try {
            const q = query(collection(firestore, 'items'), where("category", '==', category));

            const snapshot = await getDocs(q);
            if (snapshot.empty) {
                toast.error("No Items Found");
                return;
            }

            const items = [];
            snapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setCategoryItems(items);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, sortByCategory, categoryItems };
}
