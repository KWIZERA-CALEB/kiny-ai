import React from 'react';
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function TodoComponent({ Title, Des, Amount, remove, selected, handleSelection }) {
    return (
        <>
            <div className='flex justify-center mt-[0px]'>
                <div className={selected ? 'flex flex-row items-center justify-center justify-between w-[600px] border-2 border-solid border-slate-400 p-[10px] bg-blue-200' : 'flex flex-row items-center justify-center justify-between w-[600px] border-2 border-solid border-slate-400 p-[10px]'}>
                    <Checkbox checked= {selected} onClick={handleSelection} />
                    
                    <div>{Title}</div>
                    <div>{Des}</div>
                    <div>{Amount}</div>
                    
                    <div><Button className='bg-red-500' onClick={remove}>Remove</Button></div>
                </div>
            </div>
        </>
    );
}

export default TodoComponent;
