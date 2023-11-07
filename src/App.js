import React, { useEffect, useState } from "react";
import Box from './Box.js';
import TextBox from './TextBox.js';
import LoadData from './LoadData.js';
import Counter from './Counter.js';
import Custom from './Custom.js';
// import Navbar from "./Navbar";

// function trigger(obj) {
//     console.log('this', obj);
// }
// console.log('react', React.useState, useState)

function App({ data }) {
    const [name, setName] = useState('prakash');
    const [loc, setLoc] = useState('chennai');
    const [ obj, setData ] = useState({
        'name': 'prakash',
        'loc': 'chennai'
    })

    useEffect(() => {
        setData({
            'name': 'Credo'
        })
    }, [name])
    // const [ val, setValue ] = useState("");
    // console.log('before', val);
    // setValue(true);
    // console.log('after', val);

    return (
        <div>
            <span style={{ width: '20%' }}>
                {/* <Navbar /> */}
                <Box />
            </span>
            <span style={{ width: '80%' }}>
                <h1> Welcome { data.name }! </h1>
                <Custom />
                {/* <TextBox />
                <LoadData />
                <Counter /> */}
            </span>
            <button onClick={() => setData({'name': 'Vignesh', 'loc': 'chennai'}) }> { obj.name === 'Credo' ? obj.name.toUpperCase(): 'Credo'} </button>
        </div>
    )
}

export default App;