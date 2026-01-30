import "./text.css";

interface PropsType {
    children: React.ReactNode;
    className?: string;
    style?: {};
}

export const Text = ({ children, className, style }: PropsType) => { 
    return (
        <p className={className} style={style}>{children}</p>
    );  
}