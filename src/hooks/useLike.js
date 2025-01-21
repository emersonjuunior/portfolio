import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useLike = () => {
  const [error, setError] = useState();
  const [likes, setLikes] = useState();

  const addLike = async (col, data) => {
    try {
      const docRef = doc(db, "likes", col);
      await setDoc(docRef, {
        likes: data,
      });

      setLikes(data)
    } catch (error) {
        setError("Algo deu errado, tente novamente mais tarde.");
    }
  };
  
  const removeLike = async (col, data) => {
    try {
      const docRef = doc(db, "likes", col);
      await setDoc(docRef, {
        likes: data,
      });

      setLikes(data)
    } catch (error) {
      setError("Algo deu errado, tente novamente mais tarde.");
    }
  };

  const getLike = async (col) => {
    try {
      const docRef = doc(db, "likes", col);
      const response = await getDoc(docRef);
      setLikes(response.data().likes);
    } catch (error) {
      setLikes("...");
    }
  };

  return { addLike, removeLike, getLike, likes, error };
};
