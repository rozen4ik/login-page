import { useNavigate } from "react-router-dom";

interface Login {
    login: (data: {email: string, password: string}) => void;
}

export const useLogin = (): Login => {
    const navigate = useNavigate();

    const login = (data: { email: string, password: string }) => {
        if (data.email && data.password) {
            console.log("Data:", data);
            navigate("/sign-up");
        }
    };

    return { login };
}