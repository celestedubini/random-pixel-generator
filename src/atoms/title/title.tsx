import React from 'react';
import './title.css';

interface TitleProps {
    copy: string
}

function Title({copy}: TitleProps) {
    return (
        <h1 className='title'>{copy}</h1>
    );
}

export default Title;