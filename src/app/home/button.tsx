"use client";
import React from "react";

type Props = {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
};

// Define the Button component
const Button = ({ onClick, children, disabled }: Props) => {
    console.log("it works");
    console.log("testing");
    console.log("testing");
    console.log("test");

    return (
        <button className="" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
