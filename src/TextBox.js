// hooks -> useRef sample
import React, { useEffect, useRef, useState } from "react";

function TextBox() {
    const [name, setName] = useState('');
    const val = useRef('');

    useEffect(() => {
        console.log('val', val);
        val.current = val.current + name;
    })
    return (
        <>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
        </>
    )
}

export default TextBox;