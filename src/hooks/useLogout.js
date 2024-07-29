
import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase"
import useAuthStore from "../store/authStore";
import toast  from 'react-hot-toast';



const useLogout = ()=>{
    const [signout, isLoggingOut,error]=useSignOut(auth);
    const logoutUser = useAuthStore((state) => state.logout);

    const handleLogout =async ()=>{
        try {
            await signout();
            localStorage.removeItem("user-info");
            logoutUser();
        }catch (error){
            toast.error(error.message)
        }

    };
    return {handleLogout, isLoggingOut, error}


}
export default useLogout;