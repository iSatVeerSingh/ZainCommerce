import React, { MouseEventHandler } from 'react';

type TabNavBtnProps = {
  tabNavTitle: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
};

const TabNavBtn = ({ tabNavTitle, onClick, isActive }: TabNavBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-xl font-semibold ${
        isActive ? 'border-b-2 border-ecom-05' : ''
      }`}
    >
      {tabNavTitle}
    </button>
  );
};

export default TabNavBtn;
