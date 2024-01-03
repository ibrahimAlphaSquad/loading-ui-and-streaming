import React from 'react'

async function getData() {
    const res = await fetch('https://www.fruityvice.com/api/fruit/all', { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Fruits() {
    const fruitsData = await getData();
    return (
        <>
            <h2 className="text-black text-4xl font-bold">Fruits</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {fruitsData.slice(0, 10).map((_fruit, idx) => {
                    return (
                        <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-4">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{_fruit.name}</div>
                                <p className="text-gray-700"><strong>Family: </strong>{_fruit.family}</p>
                                <p className="text-gray-700"><strong>Order: </strong>{_fruit.order}</p>
                                <p className="text-gray-700"><strong>Genus: </strong>{_fruit.genus}</p>
                                <details>
                                    <summary className="text-gray-800 font-bold pt-4">Nutritions</summary>
                                    {Object.entries(_fruit.nutritions).map(([key, value]) => (
                                        <p key={key} className="text-gray-700"><strong className='capitalize'>{key}: </strong>{value}</p>
                                    ))}
                                </details>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
