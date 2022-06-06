import React from 'react';
import Pixel from "../../atoms/pixel/pixel";
import './canvas.css'

interface canvasProps {
    pixels: Array<string>
}

function Canvas({pixels}: canvasProps) {
    return (
        <div className="canvas-component">{pixels.map((pixel,index) => <Pixel key={index} color={pixel}></Pixel>)}</div>
    );
}

export default Canvas;