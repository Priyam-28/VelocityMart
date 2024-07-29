// import React from 'react'
import toast  from 'react-hot-toast';

import { useEffect, useState } from "react"
import useitemStore from "../store/itemsStore";
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs,query,where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export default function useGetUserItems() {
  const [isLoading, setIsLoading]=useState(false);
  const {items,setItems}=useitemStore();
  const userProfile = useUserProfileStore((state) => state.userProfile);


  useEffect(()=>{
    console.log(userProfile)
    const getItems=async()=>{
      if(!userProfile) return;
      setIsLoading(true);
      setItems([]);

      try{
        const q=query(collection(firestore,"items"),where("postedBy","==",userProfile.uid));
        const snapshot = await getDocs(q);
        const items=[];
        snapshot.forEach((doc)=>{
          items.push({...doc.data(),
          id:doc.id})
        });
        items.sort((a,b)=>b.postedAt-a.postedAt);
        setItems(items);
      }
      catch(error){
        toast.error(error.message);
        setItems([]);
      }
      finally{
        setIsLoading(false);
      }
    };
    getItems();
  })
  return {isLoading,items};
}
