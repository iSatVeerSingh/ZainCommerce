import React, { PropsWithChildren } from 'react';

type IconButtonOutlineProps = {
  children: React.ReactNode;
  className?: string;
};

const IconButtonOutline = ({ children, className }: IconButtonOutlineProps) => {
  return (
    <button
      className={`border-2 border-ecom-03 p-2 rounded-full text-center text-ecom-03 hover:bg-ecom-03 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButtonOutline;
