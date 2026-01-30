import "./input.css";

interface PropsType {
    inputType: string;
    placeholder?: string;
    required: boolean;
    style?: {};
    name?: string;
}

export const Input = ({ inputType, placeholder = "", required, style, name }: PropsType) => {
    return (
        <input
            className="inp"
            type={inputType}
            placeholder={placeholder}
            required={required}
            style={style}
            name={name}
        />
    )
}