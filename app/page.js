import Image from "next/image";
import styles from "./page.module.css";
import {FcGoogle} from 'react-icons/fc'

import { signIn,useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function Home() {
  const data = useSession()
  const router= useRouter()
  if(session){
    router.replace('/homePage')
  }
  return (
    <>
    <h1>LOGIN FORM</h1>
    
    <h2>Login with Google</h2>

    <button onClick={()=>
      signIn("google")
    }> <FcGoogle/>Login</button>
    </>
  )
}
