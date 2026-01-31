import { useNavigate } from "react-router-dom";

interface LoginSignUp {
    login: (data: {
        fullname: string;
        email: string;
        password: string;
    }) => void;
}

export const useSignUp = (): LoginSignUp => {
    const navigate = useNavigate();

    const login = (data: { fullname: string; email: string; password: string }) => {
        if (data.fullname && data.email && data.password) {
            console.log("Data:", data);
            navigate("/sign-in");
        }
    };

    return { login };
}