/* Hooks
Hooks are reusable functions.
When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

custom hooks Ref: https://usehooks.com/

useState:- States are Data or Properties. use state are used to change those property values
        React.useState 
useEffect:- To perform side effects in our components.
useContext:- it helps to maintain state globally. can be use along with state. it helps to share state between nested component

    useContext 
    func comp1 { state }
    func comp2 { state }
useRef:- Used to maintain state values between renders by persisting state values
useReducer:- Allow us to perform custom logic along with given state.
useCallBack:- return memoized function
useMemo:- return memoized value
Custom Hooks start with "use". Example: useFetch.
*/

import { useReducer, memo, useState, useEffect } from "react";
import useFetch from "./useFetch";


function Custom() {
    const data = useFetch('https://jsonplaceholder.typicode.com/todos');
    
    return (
        <table>
            <thead>
                <th> user ID </th>
                <th> Title </th>
                <th> is Completed? </th>
            </thead>
            <tbody>
                {data.map((obj) => {
                    return <tr>
                        <td> {obj.id} </td>
                        <td> {obj.title} </td>
                        <td> {obj.completed ? 'Yes' : 'No' } </td>
                    </tr>;
                    {/* if obj.completed == 'hello' {
                             return 'Yes'
                            else 
                            return 'No'
                    } */}
                })}
            </tbody>
        </table>
    )
}

// const Custom = () => {

// }

export default Custom;
