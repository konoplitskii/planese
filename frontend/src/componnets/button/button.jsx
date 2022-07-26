import React from 'react';
import './styles.css';
export const Button = ({
   containerClassName = '',
   className = '',
   onClick = () => null,
   children = '',
   isBackButton = false
}) => {
    return (
        <div className={ containerClassName }>
        <span
            className={ `${isBackButton ? `backButton`: `button`} ${className}` }
            onClick={ onClick }
        >
          { children }
        </span>
        </div>
    )
}
