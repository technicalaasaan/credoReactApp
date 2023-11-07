import { memo } from "react";

function Inc(props) {
    console.log('Inc Renders')
    // Inc function
    return (
        <>
           User List
           {
            props.data.map((obj, ind) => {
                return <h4 key={ind}> {obj} </h4>
            })
           }
           <button onClick={props.addData}> Add Data </button>
        </>
    )
}

export default memo(Inc);