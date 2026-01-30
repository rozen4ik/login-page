import "./button.css";

interface PropsType {
    label: string;
    className?: string;
}

export const Button = ({ label, className }: PropsType) => {
    return (
        <button className={`btn ${className}`}>{label}</button>
    )
};