import React from 'react'

async function getData() {
    const res = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=20', { cache: 'force-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Dogs() {
    const dogsData = await getData();
    return (
        <>
            <h2 className="text-black text-4xl font-bold">Dogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {dogsData.slice(0, 10).map((_dog, idx) => {
                    return (
                        <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{_dog.title}</div>
                                <p className="text-gray-700 text-base">
                                    {_dog.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
