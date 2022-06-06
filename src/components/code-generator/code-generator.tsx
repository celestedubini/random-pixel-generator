import React, {useEffect, useState} from 'react';
import Button from "../../molecules/button/button";
import {Cb} from "../../molecules/button/button";
import Canvas from "../../organisms/canvas/canvas";

function CodeGenerator() {
    const [pixels, setPixels] = useState<Array<string>>([]);
    const [rendering, setRendering] = useState<boolean>(false);
    const click: Cb = () => {
        !rendering? setRendering(true) : null;
        const newPixels: Array<string> = [];
        for (let i= 0; i<441;i++) {
            const binary: number = Math.floor(Math.random()*2);
            binary === 0?
                newPixels.push('black') : newPixels.push('white');
        }
       return setPixels(newPixels);
    }

    return (
        <div className='code-generator-component'>
            {rendering && <Canvas pixels={pixels}></Canvas>}
            <Button click={click} label={!rendering? 'Generate code' : 'Generate another code'}></Button>
        </div>
    );
}

export default CodeGenerator;