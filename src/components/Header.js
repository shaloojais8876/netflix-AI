import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { onAuthStateChanged} from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    
    const handleSignOut =  () => {
        signOut(auth)
            .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
        };

           //This useEffect is for cz i want to setup this type of eventListener(onAuthStateChanged) once!
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //This if is excuted when the User Sign In or Sign Up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
        addUser({
           uid: uid,
            email: email,
             displayName: displayName,
             photoURL: photoURL,
            })
          );
          navigate("/browse");
     } else {
        // This is when the User is signed out!                                                            
        dispatch(removeUser());
        navigate("/");
     }
  });
      //UnSubscribe when component unmounts!
  return () => unsubscribe();
 }, []);
          
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" 
            src={LOGO} alt="logo"
            />

        {user && (
            <div className="flex p-2">
                <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
        
            <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>      
            </div>
            )}
        </div>
    
    );
};
export default Header;