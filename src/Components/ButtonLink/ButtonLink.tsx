import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

const ButtonLink= ({ to, children }: ButtonLinkProps) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};

export default ButtonLink;
