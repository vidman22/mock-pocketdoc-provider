import { AUTH_TOKEN } from '../../constants'; 
import * as actionTypes from './actionTypes';

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authSuccess = ( id, email, token, expiresIn) => {
	const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem('id', id);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('email', email);

    return {
        type: actionTypes.AUTH_SUCCESS,
        id,
        email,
    };
};

export const autoLogin = (id, email ) => {
    console.log("auto login fired");
	return {
        type: actionTypes.AUTH_SUCCESS,
        id,
       	email,  
    }
}

export const authCheckState = () => {
	return dispatch => {
			const token = localStorage.getItem(AUTH_TOKEN);
			if (!token) {
				dispatch(logout())
			} else {
				const expirationDate = new Date(localStorage.getItem('expirationDate'));
				if (expirationDate <= new Date()) {
					dispatch(logout());
				} else {
                    //const id = localStorage.getItem('id');
					const id = parseInt(localStorage.getItem('id'), 10);
					const email = localStorage.getItem('email');
					dispatch(autoLogin(id, email ));
					dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
				}
			}
		}
}

export const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem('id');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('email');

    
    return {
    	type: actionTypes.LOGOUT
    };
}

