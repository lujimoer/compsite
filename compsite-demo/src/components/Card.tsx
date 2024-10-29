import { PropsWithChildren } from "react";
import { CardProps } from "./type";
import "./card.css";

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

// card header
Card.Haeder = ({ children }: PropsWithChildren) => {
  return (
    <div className="header">
      <span>{children}</span>
    </div>
  );
};

// card content
Card.Content = ({ children }: PropsWithChildren) => {
  return <div className="content">{children}</div>;
};

// card footer
Card.Footer = ({ children }: PropsWithChildren) => {
  return <div className="footer">{children}</div>;
};

export default Card;
