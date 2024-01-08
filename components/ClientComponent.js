"use client"

import Image from 'next/image';
import React, { useState } from 'react'

export default function ClientComponent() {
    const [counter, setCounter] = useState(0);

    const localArray = [
        { title: "FE" },
        { title: "BE" },
        { title: "dev-ops" }
    ]

    return (
        <div className='rounded-lg px-5 py-4 border border-gray-300 w-[27rem] flex flex-col gap-5'>
            {/* <img src='./next.svg' /> */}
            <Image src='./next.svg' alt='next.js logo'/>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>Basic Counter (Client-Side Component)</h1>
                <p className='text-black font-bold text-xl text-center mb-4'>{counter}</p>
                <div className='flex justify-center items-center gap-3'>
                    <button type='button' className='p-4 w-24 text-center text-white font-extrabold text-2xl bg-blue-600 rounded-md' onClick={() => { setCounter((prev) => ++prev) }}>+</button>
                    <button type='button' className='p-4 w-24 text-center text-white font-extrabold text-2xl bg-blue-600 rounded-md' onClick={() => { setCounter((prev) => --prev) }}>-</button>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>Key prop testing</h1>
                {localArray.map((_item,idx) => {
                    return (
                        <p key={idx}>{_item.title}</p>
                    )
                })}
            </div>
        </div>
    )
}
