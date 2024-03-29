import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Gauth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Google authentication was successfull")
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }
  return (
    <div>
      <button type="button" onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-5 py-3 uppercase
      font-medium active:shadow-lg hover:shadow-lg transition duration-200 ease-in-out rounded'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-3'/>
        Continue with Google
      </button>
    </div>
  )
}
