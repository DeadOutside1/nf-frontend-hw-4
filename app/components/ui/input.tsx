import React, { FC, InputHTMLAttributes } from 'react';

// Define the type for the props
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

// Define the Input component
export const Input: FC<InputProps> = (props) => {
  return <input {...props} className="input" />;
};
    