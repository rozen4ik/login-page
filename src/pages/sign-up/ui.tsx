import { useSignUp } from "../../features/auth/lib/useSignUp";
import { Logo } from "../../shared/ui";
import { WidgetSignUp } from "../../widgets";
import "./sign-up.css";

export const SignUp = () => {
    const { login } = useSignUp();

    return (
        <div className="signUp">
            <Logo />
            <WidgetSignUp onSumbit={login} />
        </div>
    );
}