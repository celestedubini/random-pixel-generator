import React from 'react';
import './pixel.css'

interface pixelProps {
    color: string
}

function Pixel({color}: pixelProps) {
    return (
        <div className={`size ${color === 'black'? 'black' : 'white'}`}></div>
    );
}

export default Pixel;