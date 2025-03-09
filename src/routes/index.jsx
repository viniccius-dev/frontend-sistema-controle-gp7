import { BrowserRouter, Routes, Route, Navigate } from  "react-router-dom";

import { useAuth } from "../hooks/auth";

import { SignIn } from "../pages/SignIn";
import { Home } from "../pages/Home";

export function AppRoutes() {
    const { user, loading } = useAuth();

    if(loading) {
        return <></>;
    };
    
    return (
        <BrowserRouter>
            <Routes>
                {
                    !user
                    ?
                    <Route path="/" element={<SignIn />} />
                    :
                    <Route path="/" element={<Home />} />
                }
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}