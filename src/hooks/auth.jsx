import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    function isTokenExpired(token) {
        const { exp } = jwtDecode(token);
        const expirationTime = exp * 1000;
        return Date.now() > expirationTime;
    };

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            if(isTokenExpired(token)) {
                throw new Error("Token expirado");
            };

            localStorage.setItem("@gp7eunapolis:user", JSON.stringify(user));
            localStorage.setItem("@gp7eunapolis:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else if (error.message === "Token expirado") {
                alert("Token expirado. Por favor, faça login novamente.");
            } else {
                alert("Não foi possível entrar.");
            };
        };
    };

    async function signOut() {
        localStorage.removeItem("@gp7eunapolis:user");
        localStorage.removeItem("@gp7eunapolis:token");

        setData({});
    };

    useEffect(() => {
        const token = localStorage.getItem("@gp7eunapolis:token");
        const user = localStorage.getItem("@gp7eunapolis:user");

        if(token && user) {
            if(!isTokenExpired(token)) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setData({
                    token,
                    user: JSON.parse(user)
                });
            } else {
                signOut();
            };
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };