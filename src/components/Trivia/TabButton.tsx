import React, { FC, ReactNode } from 'react';
import classes from './TabButton.module.css';

interface TabButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isActive ?: boolean;
 
}

const TabButton: FC<TabButtonProps> = ({
  children,
  onClick,
  isActive =false,

}) => {

  

  return (
    <li>
      <button
        onClick={onClick}
        className={`${classes.button} ${isActive ? classes.active : ''}`}
      
       >  
          {children}
      </button>
    </li>
  );
};

export default TabButton;