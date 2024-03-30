import { createAction } from "@reduxjs/toolkit";

const current = createAction("CURRENT", (data) => {
    return {
        payload: {
            ...data,
            loggedin: true,
        }
    }
});

const login = createAction("LOGIN", (token) => {
    localStorage.setItem("token", token)
    return {
        payload: {
            token,
            timestamps: Date.now(),
        }
    }
});

const logout = createAction("LOGOUT", () => {
    localStorage.removeItem("token");
    return {
        payload: null
    }
});


const actions = {
    current,
    login,
    logout
}

export default actions;