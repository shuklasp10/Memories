import axios from 'axios';

const URL = 'https://mymemoriesapp-server.vercel.app/user';

export const signIn =  (authData) =>(   
    axios.post(URL+'/signin',authData)
)

export const signUp = async(authData) =>(
    axios.post(URL+'/signup',authData)
)