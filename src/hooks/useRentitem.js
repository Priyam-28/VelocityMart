// useRentitem.js
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import {  addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import useUserProfileStore from '../store/userProfileStore';
import useRentStore from '../store/rentStore';
import { useLocation } from "react-router-dom";

export default function useRentitem() {
    const [isLoading, setIsLoading] = useState(false);
    const addRent = useUserProfileStore((state) => state.addRent);
    const authUser = useAuthStore((state) => state.user);
    const createRent = useRentStore((state) => state.createRent);

    
    const userProfile = useUserProfileStore((state) => state.userProfile);
    
    const { pathname } = useLocation();
    // console.log(object)
    const handleRentItem = async (selectedFile, title, description) => {
        if (isLoading) return;
        if (!selectedFile) throw new Error("Please select an image");
        setIsLoading(true);
        const newRent = {
            createdBy: authUser.uid,
            title: title,
            description: description,
            from: new Date().toISOString(),
            to: new Date().toISOString(),
        };
        try {
            const postRentRef = await addDoc(collection(firestore, "rentals"), newRent);

            const userDocRef = doc(firestore, "users", authUser.uid);

            const imageRef = ref(storage, `rentals/${postRentRef.id}`);
            await updateDoc(userDocRef, { rentItem: arrayUnion(postRentRef.id) });

            await uploadString(imageRef, selectedFile, "data_url");

            const downloadURL = await getDownloadURL(imageRef);await updateDoc(postRentRef,{imageURL:downloadURL});

            newRent.imageURL = downloadURL;

            if (userProfile.uid === authUser.uid) createRent({ ...newRent, id: postRentRef.id });
            if (pathname !== "/" && userProfile.uid === authUser.uid) addRent({ ...newRent, id: postRentRef.id });
            toast.success("Rent request Created Successfully");
        } catch (error) {
            // toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, handleRentItem }
}
