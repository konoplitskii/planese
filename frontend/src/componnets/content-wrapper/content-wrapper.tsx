import React, {FC} from 'react';
import './styles.css';

export const ContentWrapper:FC<any> = ({ children, className = '' }) => {
    return (
        <div className={`container ${className}`}>{ children }</div>
    )
}
