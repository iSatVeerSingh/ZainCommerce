import React, { MouseEventHandler } from "react";

type ButtonQuantityProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonQuantity = ({children, onClick}: ButtonQuantityProps) => {
  return (
    <button onClick={onClick} className='text-xl px-3 rounded-md h-full flex-shrink-0'>{children}</button>
  )
}

export default ButtonQuantity