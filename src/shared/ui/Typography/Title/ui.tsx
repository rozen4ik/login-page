import "./title.css";

interface PropsType {
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h5";
    children: React.ReactNode;
}

export const Title = ({ children, className, tag: Tag = "h1" }: PropsType) => {
    return (
        <Tag className={`title ${className}`}>{children}</Tag>
    );
}