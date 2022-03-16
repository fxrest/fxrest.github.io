import React, { useState, useEffect } from 'react'
import './creatures.scss';

export default function Creatures() {
    const [creatures, setCreatures] = useState([])

    useEffect(() => {
        const get = async () => {
            const r = await fetch("https://api.tibiadata.com/v3/creatures");
            const d = await r.json();
            setCreatures(d.creatures.creature_list)
        }
        get()
    }, [])

    return (
        <div>
            {creatures.map((cre, index) => (
                <div className='creatureListHolder' key={index}>
                    {cre.name}
                    <img src={cre.image_url} alt="" />
                </div>
            ))}
        </div>
    )
}
