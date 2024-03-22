import React from 'react';

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
    />
  );
};

export default Button;
