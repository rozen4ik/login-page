import { Title, Text, Input, Button } from "../../shared/ui";
import "./widget-sign-up.css";

interface PropsType {
    onSumbit: (data: {
        fullname: string;
        email: string;
        password: string;
    }) => void;
}

export const WidgetSignUp = ({ onSumbit }: PropsType) => {
    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fullname = (form.fullname as HTMLInputElement).value;
        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        onSumbit({ fullname, email, password });
    };

    return (
        <form className="widgetSignUp" onSubmit={handleSumbit}>
            <Title tag="h1">Join us Now!!!</Title>
            <Text className="text" style={{ marginBottom: "70px" }}>Let's Create your account</Text>

            <Text className="label" style={{ marginBottom: "20px" }}>Full Name</Text>
            <Input
                inputType="text"
                placeholder="enter your name"
                required={true}
                style={{ marginBottom: "40px" }}
                name="fullname"
            />

            <Text className="label" style={{ marginBottom: "20px" }}>Email</Text>
            <Input
                inputType="email"
                placeholder="admin@admin.org"
                required={true}
                style={{ marginBottom: "40px" }}
                name="email"
            />

            <Text className="label" style={{ marginBottom: "20px" }}>Password</Text>
            <Input
                inputType="password"
                placeholder="password"
                required={true}
                style={{ marginBottom: "40px" }}
                name="password"
            />

            <Button label="Sign Up" />
        </form>
    );
}