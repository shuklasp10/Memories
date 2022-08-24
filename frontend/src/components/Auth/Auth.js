import React, {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Auth = () => {
  const [isSignUp,setSignUp] = useState(false);
  return (
    <>
    {isSignUp?<SignUp setSignUp={setSignUp} />:<SignIn setSignUp={setSignUp} />}
    </>
  )
}

export default Auth