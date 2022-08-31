import axios from 'axios';

const URL = 'http://localhost:5000/user';

export const signIn =  (authData) =>(   
    axios.post(URL+'/signin',authData)
)

export const signUp = async(authData) =>(
    axios.post(URL+'/signup',authData)
)