import {useState} from 'react';
export default function CounterContainer() {
    const [count, setCount] = useState(0);
    
    const clickHandlier = ()=>{
        setCount((preCount)=>{
            return preCount+1;
        });
    };

    return (
        <div>
            <input type="text" value={count} />
            <button onClick={clickHandlier}>+</button>
        </div>
    );
}
