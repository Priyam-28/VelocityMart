import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useitemStore from "../store/itemsStore";
import useUserProfileStore from "../store/userProfileStore";
import useAuthStore from "../store/authStore";


export default function useGetItems() {
  const[isLoading,setIsLoading]=useState(true);
  const{items,setItems}=useitemStore();
  const { setUserProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);

  useEffect(() => {
    // console.log(setUserProfile)

    const fetchItems = async () => {
      setIsLoading(true);
    
      const itemCollectionRef = collection(firestore, 'items');
      try {
        const snapshot = await getDocs(itemCollectionRef);
        const itemsPost = [];
        for (const doc of snapshot.docs) {
          const data = await doc.data();
          const item = { id: doc.id, ...data };
          itemsPost.push(item);
      }
        itemsPost.sort((a, b) => b.postedAt - a.postedAt);
        setItems(itemsPost); // Update local state if needed
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if(authUser) fetchItems();
  }, [authUser,setItems,setUserProfile]);

  // Return the array of items
  return { isLoading, items };
}
