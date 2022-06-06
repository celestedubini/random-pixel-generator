import React from 'react';
import './button.css';

interface ButtonProps {
   click: Cb;
   label: string;
}

export interface Cb {
    (): void
}


function Button({click, label}: ButtonProps) {
    return (
        <button onClick={click} className='button'>{label}</button>
    );
}

export default Button;