import { LoginWithEmailPassword, logoutFirebase, registerUserWithEmail, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { CheckingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(CheckingCredentials());
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {

        dispatch(CheckingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {
        dispatch(CheckingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(CheckingCredentials());
        const { ok, errorMessage, uid, photoURL, displayName } = await LoginWithEmailPassword({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, photoURL, displayName }))
    }


}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout({errorMessage: null}))
    }
}