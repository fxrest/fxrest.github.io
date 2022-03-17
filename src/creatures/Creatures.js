import React, { useState, useEffect } from 'react'
import './Creatures.scss';

export default function Creatures({ select }) {
    const [creatures, setCreatures] = useState([]);

    useEffect(() => {
        const get = async () => {
            const response = await fetch("https://api.tibiadata.com/v3/creatures");
            const d = await response.json();
            if (response.ok) {
                setCreatures(d.creatures.creature_list)
            }
        }
        get()
    }, []);

    return (
        <div className='creatureListHolder'>
            {creatures.map(({ race, name, image_url }) => (
                <div className='creatureListElement' key={race} onClick={() => select(race)}>
                    {name}
                    <img src={image_url} alt={race} />
                </div>
            ))}
        </div>
    )
}
