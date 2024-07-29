import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export default function useGetRentItem() {
  const [rentals, setRentals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRentals = async () => {
      setIsLoading(true);
      try {
        const q = query(collection(firestore, "rentals"));
        const querySnapshot = await getDocs(q);
        const fetchedRentals = [];
        querySnapshot.forEach((doc) => {
          fetchedRentals.push({ id: doc.id, ...doc.data() });
        });
        setRentals(fetchedRentals);
      } catch (error) {
        console.error("Error fetching rentals: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentals();
  }, []);

  return { rentals, isLoading };
}
