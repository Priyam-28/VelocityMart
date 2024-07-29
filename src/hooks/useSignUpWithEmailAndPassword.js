import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../firebase/firebase";
import toast  from 'react-hot-toast';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

function endsWithVIT(email) {
    // Regular expression to match email ending with 'vit.ac.in' or 'vit student.ac.in'
    var regex = /@(vit\.ac\.in|vitstudent\.ac\.in)$/i; 
    return regex.test(email);
}


const useSignUpWithEmailAndPassword= () =>{
    
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const loginUser = useAuthStore((state) => state.login);
      const signup=async (inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            toast.error('Please enter all the details.');
            return;
        }
        //manageing logs with VIT mail id only
        if(!endsWithVIT(inputs.email)){
            toast.error('Please use VIT mail ID');
            return;
        }
        const usersRef=collection(firestore,"users");
        const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			toast.error('Username already exists')
			return;
		}
        try{
            const newUser=await createUserWithEmailAndPassword(inputs.email,inputs.password);
            if(!newUser && error){
                toast.log(error.message);
                return;
            }
            if(newUser){
                const userDoc={
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    soldTo:[],
                    purchasedFrom:[],
                    items:[],
                    rentItem:[],
                    createdAt:Date.now(),
                    
                };
                await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc);

				
            }

        }
        catch(err){
            toast.error(err.message);
        }

        toast.success("User Registered Successfully");
        

      }
  return { loading, error, signup };
}

export default useSignUpWithEmailAndPassword;

