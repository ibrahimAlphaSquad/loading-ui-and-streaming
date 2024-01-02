import React from 'react'

async function getData() {
    const res = await fetch('https://apiv3.iucnredlist.org/api/v3/species/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee', { cache: 'force-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function ThreatenedSpecies() {
    const threatenedSpeciesData = await getData();
    return (
        <>
            <h2 className="text-black text-4xl font-bold">List of Threatened Species</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {threatenedSpeciesData.result.slice(0, 10).map((_specie, idx) => {
                    return (
                        <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{_specie.scientific_name}</div>
                                <p className="text-gray-700 text-base"><strong>Kingdom:</strong> {_specie.kingdom_name}</p>
                                <p className="text-gray-700 text-base"><strong>Phylum:</strong> {_specie.phylum_name}</p>
                                <p className="text-gray-700 text-base"><strong>Class:</strong> {_specie.class_name}</p>
                                <p className="text-gray-700 text-base"><strong>Family:</strong> {_specie.family_name}</p>
                                <p className="text-gray-700 text-base"><strong>Genus:</strong> {_specie.genus_name}</p>
                                <p className="text-gray-700 text-base"><strong>Taxonomic Authority:</strong> {_specie.taxonomic_authority}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
