// hooks -> useReducer
import React, { useReducer } from "react";


const user_data = [
    {
        id: 1,
        name: 'prakash',
        loc: 'chennai',
        val: false
    },
    {
        id: 2,
        name: 'vignesh',
        loc: 'kanchipuram',
        val: false
    }
]

const reducer = (state, action) => {
    console.log('action', action, 'state', state);
    return state.map((obj) => {
        if (obj.id == action.id) {
            return { ...obj, val: !obj.val }
        }
        else {
            return obj;
        }
    })
}

export default function LoadData() {
    const [data, dispatch] = useReducer(reducer, user_data);
    const handleChange = (inp) => {
        dispatch(inp)
    }

    return (
        <>
            {data.map((d) => (
                <div key={d.id}>
                    <label>
                        <input type="checkbox" checked={d.val} onChange={() => handleChange(d)} /> {d.name}
                    </label>
                </div>
            ))}
        </>
    )
}