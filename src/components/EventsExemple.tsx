import React, {FC, useState} from 'react';
import {Simulate} from "react-dom/test-utils";

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
       setValue(e.target.value)
    }

    const clickHandler =(e: React.MouseEvent<HTMLButtonElement>)=>{
      console.log(value)
    }
    return (
        <div>
             <input value={value} type={'text'} onChange={changeHandler}/>
             <button onClick={clickHandler}>Press me</button>
        </div>
    );
};

export default EventExample;
