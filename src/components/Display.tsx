import React from 'react';

interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return <input type="text" value={value} readOnly />;
};

export default Display;
