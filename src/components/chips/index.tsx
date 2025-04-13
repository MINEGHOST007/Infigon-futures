"use client";
import React from 'react'

interface ChipsProps {
    name: string;
    id: number;
}

const Chips: React.FC<ChipsProps> = ({ name, id }) => {
    return (
        <button className='flex gap-2 rounded-full px-2 py-2 mx-2 border-1 border-[#CACACA] shadow-sm hover:cursor-pointer'>
            <div className='bg-[#CACACA] rounded-full text-white w-6'>
                {id}
            </div>
            <span className='text-[#696969] poppins-medium blur-[2px] mx-1'>
            {name}
            </span>
        </button>
    );
}

export default Chips;