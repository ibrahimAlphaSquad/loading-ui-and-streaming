"use client"

import React, { useEffect, useState } from 'react'

export default function ClientComponent() {
    const [unUsedStated, setUnUsedStated] = useState(null);
    const [someState, setSomeState] = useState(null);
    const [counter, setCounter] = useState(second)

    useEffect(() => {
        console.log("useEffect")
    }, [])

    return (
        <div className=''>
            <p className='text-black font-bold text-xl'>{counter}</p>
            <div className='flex justify-center items-center'>
                <button className='p-4 text-center text-black text-lg bg-blue-600 rounded-md' onClick={() => { setCounter((prev) => { ++prev }) }}>+</button>
                <button className='p-4 text-center text-black text-lg bg-blue-600 rounded-md' onClick={() => { setCounter((prev) => { --prev }) }}>-</button>
            </div>
        </div>
    )
}
