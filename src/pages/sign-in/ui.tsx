import { WidgetLogo, WidgetSignIn } from "../../widgets";
import "./sign-in.css";
import { useSignIn } from "../../features";

export const SignIn = () => {
    const { login } = useSignIn();

    return (
        <div className="signIn">         
            <WidgetLogo />   
            <WidgetSignIn onSumbit={login} />
        </div>
    );
}