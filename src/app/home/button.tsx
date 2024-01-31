'use client';
import React from 'react';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  color: string;
  disabled?: boolean;
};

// Define the Button component
const Button = ({ onClick, children, color, disabled }: Props) => {
  // Determine the CSS classes based on props
  const buttonClass = `btn ${color}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button