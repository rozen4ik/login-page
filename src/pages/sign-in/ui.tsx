import { WidgetSignIn } from "../../widgets";
import "./sign-in.css";
import { useLogin } from "../../features";

export const SignIn = () => {
    const { login } = useLogin();

    return (
        <div className="signIn">
            {/* <WidgetLogo /> */}
            <WidgetSignIn onSumbit={login} />
        </div>
    );
}