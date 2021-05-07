import React from 'react';
import {signInWithGoogle} from "../firebase";

export default function AuthHome() {


  return (
    <div className="auth-home">
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}
