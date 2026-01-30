import { Button, Input, Title, Text } from "../../shared/ui";
import "./widget-sign.css";

interface PropsType {
    onSumbit: (data: {
        email: string;
        password: string;
    }) => void;
}

export const WidgetSignIn = ({ onSumbit }: PropsType) => {
    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        onSumbit({ email, password });
    };

    return (

        <form className="widgetSignIn" onSubmit={handleSumbit}>
            <Title tag="h1">Welcome Back</Title>
            <Text className="text" style={{ marginBottom: "70px" }}>Please login your account</Text>

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

            <Button label="Sign In" />
        </form>
    );
}