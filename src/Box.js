// hooks-> useContext sample 
import React, { createContext, useContext, useState } from "react";

const nameContext = createContext();

function Box2() {
    const name = useContext(nameContext);
    return (
        <>
            <h2> Am H2... {name} </h2>
        </>
    )
}

function Box1() {
    const name = useContext(nameContext);
    return (
        <>
            <h2> Am H2... {name} </h2>
            <Box2 name={name} />
        </>
    )
}

export default function Box() {
    const [name, setName] = useState("Credo");
    return (
        <nameContext.Provider value={name}>
            <h1> Am H1... </h1>
            <Box1 name={name} />
        </nameContext.Provider>
    )
}



// import React, { useState } from "react";

// function Box2({ name }) {
//     return (
//         <>
//             <h2> Am H2... {name} </h2>
//         </>
//     )
// }

// function Box1({ name }) {
//     return (
//         <>
//             <h2> Am H2... {name} </h2>
//             <Box2 name={name} />
//         </>
//     )
// }

// export default function Box() {
//     const [name, setName] = useState("Credo");
//     return (
//         <>
//             <h1> Am H1... </h1>
//             <Box1 name={name} />
//         </>
//     )
// }
