import * as api from '../api/auth';

export const signIn = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(authData);
        navigate('/');
        dispatch({ type: 'CURRENT_USER', payload: data });
    }
    catch (e) {
        console.log(e.response.data.message);
    }
}

export const signUp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData);
        navigate('/');
        dispatch({ type: 'CURRENT_USER', payload: data });
    }
    catch (e) {
        console.log(e.response.data.message);
    }
}