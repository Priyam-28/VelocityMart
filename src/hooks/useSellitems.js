import { useState } from 'react';
import toast  from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import useitemStore from '../store/itemsStore';
import useUserProfileStore from '../store/userProfileStore';
// import usePreviewImg from "../../hooks/usePreviewImg";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';



export default function useSellitems() {
    const [isLoading, setIsLoading] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const createItem = useitemStore((state) => state.createItem);
	const addItem = useUserProfileStore((state) => state.addItem);
    const userProfile = useUserProfileStore((state) => state.userProfile);
	const { pathname } = useLocation();

    const handleSellItem=async(selectedFile,title,description,category,phone,address)=>{
        if(isLoading) return;
        if(!selectedFile) throw new Error("Please Select a file")
        setIsLoading(true)
        const newItem ={
            postedBy:authUser.uid,
            postedAt:Date.now(),
            title:title,
            description:description,
            category:category,
            phone:phone,
            address:address
        };
        try{
            const postItemRef=await addDoc(collection(firestore,"items"),newItem);
            //new posts collection in the database
            const userDocRef=doc(firestore,'users',authUser.uid);
            //Ye wla user uthana hai 
            const imageRef=ref(storage,`items/${postItemRef.id}`)
            //create a reference to a location within your Firebase Storage bucket.

            await updateDoc(userDocRef,{items:arrayUnion(postItemRef.id)})
            //inserting the uid of the item in the user arrauy collection

            await uploadString(imageRef,selectedFile,"data_url");
            //overall, this line of code uploads the image data contained in selectedFile as a string to the specified location
            const downloadURL=await getDownloadURL(imageRef);
            await updateDoc(postItemRef,{imageURL:downloadURL});
            //adding images to the item section

            newItem.imageURL=downloadURL;
            // kahan update karna hai
            if(userProfile.uid === authUser.uid) createItem({...newItem,id:postItemRef.id})

            //apne accont se hi pist kar sakte ha uske liye

            if(pathname !=='/' && userProfile.uid===authUser.uid)addItem({...newItem,id:postItemRef.id});

            toast.success("Your Item is Listed Succesfully")
        }
        catch(error){
            // toast.error(error.message);
        }
        finally{
            setIsLoading(false)
        }
    };
  return{ isLoading, handleSellItem }
}