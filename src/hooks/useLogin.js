import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import {  doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import toast  from 'react-hot-toast';


export default function useLogin() {
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);

	const loginUser = useAuthStore((state) => state.login);
    const login = async (inputs) => {
		if (!inputs.email || !inputs.password) {
			return toast.error("Please Fill all the Details");
		}
		try {
			const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

			if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
			}



		} catch (error) {
			toast.error(error.message);
			console.log(error.code)
		}
	};



  return{loading, error, login}
}
