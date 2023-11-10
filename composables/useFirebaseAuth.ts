import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useFirebaseAuth = () => {

    const {$auth} = useNuxtApp() //to get auth from my firebase.client.ts file
    
    const register = async (email:string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword($auth, email, password);
            const user = userCredential.user;
            console.log(user)
        } catch (error){
            console.log(error)
        }
    };

    const login = async (email:string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword($auth, email, password);
            const user = userCredential.user;
            console.log(user)
        } catch (error){
            console.log(error)
        }
    }

    const logOut =async () => {
         await signOut($auth)
         await navigateTo('/login')

         
        
    }



    return{register, login, logOut};

}