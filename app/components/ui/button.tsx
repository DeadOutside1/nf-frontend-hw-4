import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react';

// Define the type for the props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

// Define the Button component
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};
