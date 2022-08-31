export default function authReducer(userData=null,action ){
    switch(action.type){
        case 'CURRENT_USER':
            userData = action.payload;
            return userData;
        case 'LOGOUT':
            return null;
        default:
            return userData; 
    }

}