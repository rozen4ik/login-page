import { useSignUp } from "../../features/auth/lib/useSignUp";
import { WidgetSignUp } from "../../widgets";
import "./sign-up.css";

export const SignUp = () => {
    const { login } = useSignUp();

    return (
        <div className="signUp">
            <WidgetSignUp onSumbit={login} />
        </div>
    );
}